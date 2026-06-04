import { env, createExecutionContext, waitOnExecutionContext, SELF } from 'cloudflare:test';
import { describe, it, expect } from 'vitest';
import worker from '../src/index';

const IncomingRequest = Request<unknown, IncomingRequestCfProperties>;

describe('rm-api-proxy worker', () => {
	it('health check returns { ok: true } (unit style)', async () => {
		const request = new IncomingRequest('http://example.com');
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);
		expect(response.status).toBe(200);
		expect(await response.json()).toEqual({ ok: true });
	});

	it('health check returns { ok: true } (integration style)', async () => {
		const response = await SELF.fetch('https://example.com');
		expect(response.status).toBe(200);
		expect(await response.json()).toEqual({ ok: true });
	});

	it('rejects preflight from a disallowed origin', async () => {
		const request = new IncomingRequest('https://example.com/auth/sign', {
			method: 'OPTIONS',
			headers: { Origin: 'https://evil.example.com' },
		});
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);
		expect(response.status).toBe(403);
		expect(response.headers.get('Access-Control-Allow-Origin')).toBeNull();
	});

	it('allows preflight from localhost with credentials', async () => {
		const request = new IncomingRequest('https://example.com/auth/sign', {
			method: 'OPTIONS',
			headers: { Origin: 'http://localhost:3000' },
		});
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);
		expect(response.status).toBe(204);
		expect(response.headers.get('Access-Control-Allow-Origin')).toBe('http://localhost:3000');
		expect(response.headers.get('Access-Control-Allow-Credentials')).toBe('true');
	});

	it('blocks a credentialed POST from a disallowed origin', async () => {
		const request = new IncomingRequest('https://example.com/auth/sign', {
			method: 'POST',
			headers: { Origin: 'https://evil.example.com', 'Content-Type': 'application/json' },
			body: JSON.stringify({ method: 'get', url: 'https://sb-open.revenuemonster.my/v1/x' }),
		});
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);
		expect(response.status).toBe(403);
	});
});
