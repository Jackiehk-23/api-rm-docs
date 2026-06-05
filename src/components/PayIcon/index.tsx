import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

interface Props {
  /** Path relative to static/img/payment-icons, e.g. "Wallet/Alipay/Alipay_V1_ROU.svg" */
  path?: string | null;
  size?: number;
  alt?: string;
  style?: React.CSSProperties;
}

/**
 * Renders a locally-hosted payment/bank logo, resolving the site baseUrl.
 * Falls back to a blank spacer when no path is provided.
 */
export default function PayIcon({ path, size = 28, alt = '', style }: Props) {
  const src = useBaseUrl(path ? `/img/payment-icons/${path}` : '/');
  if (!path) {
    return <span style={{ display: 'inline-block', width: size, height: size, flexShrink: 0, ...style }} />;
  }
  return (
    <img
      src={src}
      alt={alt}
      style={{ height: size, width: size, objectFit: 'contain', flexShrink: 0, ...style }}
    />
  );
}
