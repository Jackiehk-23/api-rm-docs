---
title: "DeepLink — Setup"
sidebar_label: "Setup"
---

## What is this?

DeepLink Integration lets businesses manage orders through a single mobile application and process transactions using various payment methods via the Revenue Monster Merchant App on Android terminals.

:::note
This integration is compatible with any mobile device or terminal running the RM Merchant App.
:::

---

## How to Use

### Step 1: Set Up the Android Receiver

Configure your Android app to receive the DeepLink intent from the RM Merchant App.

### Step 2: Choose the Transaction Type

Select the appropriate `transactionType` number:
- `1` — Quick Pay
- `2` — Card Payment
- `3` — Void Transaction
- `4` — Wallet Settlement
- `5` — Card Settlement

### Step 3: Launch the Intent

Use the `REVENUE_MONSTER_PAYMENT` intent with the required extras.

### Step 4: Handle the Response

The result is returned as a JSON string in the `result` extra of the intent.

---

## AndroidManifest.xml

<CodeBlock language="xml" filename="AndroidManifest.xml">
{`<activity android:name=".ReceiverActivity" android:exported="true">
    <intent-filter>
        <action android:name="android.intent.action.SEND" />
        <category android:name="android.intent.category.DEFAULT" />
        <data android:mimeType="text/plain" />
    </intent-filter>
</activity>`}
</CodeBlock>

## ReceiverActivity.kt

<CodeBlock language="kotlin" filename="ReceiverActivity.kt">
{`class ReceiverActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        try {
            val keySet: Set<String> = intent?.extras!!.keySet()
            keySet.forEach { key ->
                val value = intent.extras!![key]
                Log.v("Receiver", "key = $key || value = $value")
            }
        } catch (e: Exception) {
            e.printStackTrace()
        }
        val result = intent?.getStringExtra("result")
        val transactionType = intent?.getIntExtra("transactionType")
        // Process result and transactionType here
    }
}`}
</CodeBlock>

<!-- SPDX-License-Identifier: Apache-2.0 -->
