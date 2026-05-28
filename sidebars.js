//next task side bar and custom css


module.exports = {
  someSidebar: [
    { type: "doc", id: "introduction/overview", label: "Introduction" },

    { type: "category", label: "Quick Start", items: [
      "quickstart/overview",
      "quickstart/signature-algorithm",
      "quickstart/verify-signature",
      {
        type: "category",
        label: "Access Token",
        items: [
          {
            type: "doc",
            id: "quickstart/accesstoken/client-credentials",
            className: "api-post",
          },
          {
            type: "doc",
            id: "quickstart/accesstoken/authorization-code",
            className: "api-post",
          },
          {
            type: "doc",
            id: "quickstart/accesstoken/refresh-token",
            className: "api-post",
          },
        ],
      },
    ]},

    { type: "category", label: "Merchants", items: [
      "merchants/overview",
      { type: "category", label: "Partner Merchant", items: [
        "merchant-onboarding/overview",
        "merchant-onboarding/introduction",
        { type: "doc", id: "merchant-onboarding/create-merchant", className: "api-post" },
        { type: "doc", id: "merchant-onboarding/get-merchants", className: "api-get" },
        { type: "doc", id: "merchant-onboarding/get-merchant", className: "api-get" },
        { type: "doc", id: "merchant-onboarding/update-merchant", className: "api-patch" },
        { type: "doc", id: "merchant-onboarding/submit-merchant-for-review", className: "api-post" },
        { type: "doc", id: "merchant-onboarding/upload-merchant-file", className: "api-post" },
        { type: "category", label: "Application Clients", items: [
          { type: "doc", id: "merchant-onboarding/application-clients/get-application-clients", className: "api-get" },
          { type: "doc", id: "merchant-onboarding/application-clients/create-application-client", className: "api-post" },
          { type: "doc", id: "merchant-onboarding/application-clients/update-application-client", className: "api-put" },
        ]},
      ]},
      { type: "category", label: "Account", items: [
        "settings/account-detail/overview",
        { type: "doc", id: "settings/account-detail/create-account", className: "api-post" },
        { type: "doc", id: "settings/account-detail/get-accounts", className: "api-get" },
        { type: "doc", id: "settings/account-detail/get-account", className: "api-get" },
        { type: "doc", id: "settings/account-detail/update-account", className: "api-put" },
        { type: "doc", id: "settings/account-detail/submit-account-review", className: "api-post" },
      ]},
      { type: "category", label: "Store", items: [
        "settings/store-detail/overview",
        { type: "doc", id: "settings/store-detail/store-details", className: "api-get" },
        { type: "doc", id: "settings/store-detail/get-store-by-id", className: "api-get" },
        { type: "doc", id: "settings/store-detail/create-store", className: "api-post" },
        { type: "doc", id: "settings/store-detail/update-store", className: "api-patch" },
        { type: "doc", id: "settings/store-detail/delete-store", className: "api-delete" },
      ]},
      { type: "category", label: "Merchant", items: [
        "settings/merchant-detail/overview",
        { type: "doc", id: "settings/merchant-detail/merchant-profile", className: "api-get" },
        { type: "doc", id: "settings/merchant-detail/merchant-subscriptions", className: "api-get" },
      ]},
      { type: "category", label: "User", items: [
        "settings/user-overview",
        { type: "doc", id: "settings/user-profile", className: "api-get" },
      ]},
    ]},

    { type: "category", label: "Payment", items: [
      "v2/payment/overview",
      {
        type: "category",
        label: "Quick Pay",
        collapsible: true,
        collapsed: true,
        items: [
          { type: "doc", id: "v2/payment/quick-pay/standard", className: "api-post" },
          { type: "doc", id: "v2/payment/quick-pay/with-voucher", className: "api-post" },
          { type: "doc", id: "v2/payment/quick-pay/with-spending-loyalty", className: "api-post" },
          {
            type: "category",
            label: "Membership Card",
            items: [
              { type: "doc", id: "v2/payment/quick-pay/membership-card/verify", className: "api-post" },
              { type: "doc", id: "v2/payment/quick-pay/membership-card/quick-pay", className: "api-post" },
            ],
          },
        ],
      },
      {
        type: "category",
        label: "Query",
        collapsible: true,
        collapsed: true,
        items: [
          { type: "doc", id: "v2/payment/query/by-order-id", className: "api-get" },
          { type: "doc", id: "v2/payment/query/by-transaction-id", className: "api-get" },
          { type: "doc", id: "v2/payment/query/all-transactions", className: "api-get" },
          "v2/payment/query/transaction-object",
        ],
      },
      {
        type: "category",
        label: "Cancel Transaction",
        collapsible: true,
        collapsed: true,
        items: [
          { type: "doc", id: "v2/payment/cancel-transaction/reverse-transaction", className: "api-post" },
          { type: "doc", id: "v2/payment/cancel-transaction/refund-transaction", className: "api-post" },
        ],
      },
      {
        type: "category",
        label: "Terminal",
        collapsible: true,
        collapsed: true,
        items: [
          { type: "doc", id: "v2/payment/terminal/quick-pay", className: "api-post" },
          { type: "doc", id: "v2/payment/terminal/card-payment", className: "api-post" },
          { type: "doc", id: "v2/payment/terminal/card-refund", className: "api-post" },
          { type: "doc", id: "v2/payment/terminal/card-settlement", className: "api-post" },
          { type: "doc", id: "v2/payment/terminal/cancel-event", className: "api-post" },
        ],
      },
      {
        type: "category",
        label: "DeepLink",
        collapsible: true,
        collapsed: true,
        items: [
          "v2/payment/deeplink/setup",
          { type: "doc", id: "v2/payment/deeplink/quick-pay", className: "api-post" },
          { type: "doc", id: "v2/payment/deeplink/card-payment", className: "api-post" },
          { type: "doc", id: "v2/payment/deeplink/void-transaction", className: "api-post" },
          { type: "doc", id: "v2/payment/deeplink/wallet-settlement", className: "api-post" },
          { type: "doc", id: "v2/payment/deeplink/card-settlement", className: "api-post" },
        ],
      },
      {
        type: "category",
        label: "Online Payment",
        collapsible: true,
        collapsed: true,
        items: [
          { type: "doc", id: "v2/payment/online-payment/hosted-checkout", className: "api-post" },
          "v2/payment/online-payment/individual-checkout",
          { type: "doc", id: "v2/payment/online-payment/query-checkout", className: "api-get" },
          {
            type: "category",
            label: "Direct Checkout",
            items: [
              { type: "doc", id: "v2/payment/online-payment/direct-checkout/mode-url", className: "api-post" },
              { type: "doc", id: "v2/payment/online-payment/direct-checkout/mode-qrcode", className: "api-post" },
              { type: "doc", id: "v2/payment/online-payment/direct-checkout/mode-duitnow-qr", className: "api-post" },
              { type: "doc", id: "v2/payment/online-payment/direct-checkout/mode-alipay-mini", className: "api-post" },
              { type: "doc", id: "v2/payment/online-payment/direct-checkout/mode-wechatpay-mini", className: "api-post" },
              { type: "doc", id: "v2/payment/online-payment/direct-checkout/mode-fpx", className: "api-post" },
              { type: "doc", id: "v2/payment/online-payment/direct-checkout/mode-gobiz", className: "api-post" },
            ],
          },
        ],
      },
      {
        type: "category",
        label: "Tokenization",
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: "category",
            label: "Recurring",
            items: [
              { type: "doc", id: "v2/payment/tokenization/recurring/create-customer", className: "api-post" },
              "v2/payment/tokenization/recurring/redirect-response",
              "v2/payment/tokenization/recurring/notify-response",
            ],
          },
          {
            type: "category",
            label: "Tokenized",
            items: [
              { type: "doc", id: "v2/payment/tokenization/tokenized/create-customer", className: "api-post" },
              "v2/payment/tokenization/tokenized/redirect-response",
            ],
          },
          {
            type: "category",
            label: "Customer",
            items: [
              { type: "doc", id: "v2/payment/tokenization/customer/get-info", className: "api-get" },
              { type: "doc", id: "v2/payment/tokenization/customer/get-orders", className: "api-get" },
              { type: "doc", id: "v2/payment/tokenization/customer/toggle-status", className: "api-post" },
              { type: "doc", id: "v2/payment/tokenization/customer/create-order", className: "api-post" },
            ],
          },
        ],
      },
      { type: "doc", id: "v2/payment/reconciliation", className: "api-post" },
    ]},

    { type: "category", label: "Visa Offers Platform", items: [
      "visa-vop/overview",
      { type: "doc", id: "visa-vop/enroll-user", className: "api-post" },
      { type: "doc", id: "visa-vop/unenroll-user", className: "api-delete" },
      { type: "doc", id: "visa-vop/enroll-card", className: "api-post" },
      { type: "doc", id: "visa-vop/unenroll-card", className: "api-delete" },
      "visa-vop/webhook",
    ]},

    { type: "category", label: "Services", items: [
      "services/overview",
      { type: "category", label: "Plugin", items: [
        "v2/plugin/overview",
        "v2/plugin/introduction",
        "v2/plugin/integration",
      ]},
      { type: "category", label: "à la carte", items: [
        "alacarte-open/overview",
        "alacarte-open/introduction",
        {
          type: "category",
          label: "Orders",
          items: [
            { type: "doc", id: "alacarte-open/orders/get-orders-by-store-id", className: "api-post" },
            { type: "doc", id: "alacarte-open/orders/get-order-by-id", className: "api-post" },
            { type: "doc", id: "alacarte-open/orders/update-order-status", className: "api-post" },
            { type: "doc", id: "alacarte-open/orders/refund-order", className: "api-post" },
          ],
        },
        {
          type: "category",
          label: "Store",
          items: [
            { type: "doc", id: "alacarte-open/store/get-store-by-id", className: "api-post" },
            { type: "doc", id: "alacarte-open/store/update-store-by-id-delivery", className: "api-post" },
            { type: "doc", id: "alacarte-open/store/update-store-by-id-types", className: "api-post" },
            { type: "doc", id: "alacarte-open/store/update-store-by-id-availability", className: "api-post" },
          ],
        },
        {
          type: "category",
          label: "Inventory",
          items: [
            { type: "doc", id: "alacarte-open/inventory/create-category-by-store-id", className: "api-post" },
            { type: "doc", id: "alacarte-open/inventory/get-categories-by-store-id", className: "api-post" },
            { type: "doc", id: "alacarte-open/inventory/update-category-by-id", className: "api-post" },
            { type: "doc", id: "alacarte-open/inventory/create-item", className: "api-post" },
            { type: "doc", id: "alacarte-open/inventory/get-items-by-category-id", className: "api-post" },
            { type: "doc", id: "alacarte-open/inventory/get-all-items-by-store-id", className: "api-post" },
            { type: "doc", id: "alacarte-open/inventory/update-item-by-id", className: "api-post" },
            { type: "doc", id: "alacarte-open/inventory/update-item-quantity-by-id", className: "api-post" },
          ],
        },
        { type: "doc", id: "alacarte-open/set-notification", className: "api-post" },
      ]},
      { type: "category", label: "eKYC", items: [
        "ekyc/overview",
        { type: "doc", id: "ekyc/mykad-recognition", className: "api-post" },
        { type: "doc", id: "ekyc/liveness-check-with-face-verification", className: "api-post" },
        { type: "doc", id: "ekyc/face-verification", className: "api-post" },
        { type: "doc", id: "ekyc/get-mykad-result", className: "api-post" },
        { type: "doc", id: "ekyc/get-ekyc-result", className: "api-post" },
      ]},
    ]},

    { type: "category", label: "Loyalty & Voucher", items: [
      "campaign/overview",
      {
        type: "category",
        label: "Member",
        items: [
          { type: "doc", id: "campaign/member/register-loyalty-member", className: "api-post" },
          { type: "doc", id: "campaign/member/check-loyalty-member", className: "api-post" },
          { type: "doc", id: "campaign/member/profile", className: "api-get" },
          {
            type: "category",
            label: "Vouchers",
            items: [
              { type: "doc", id: "campaign/member/vouchers/vouchers-detail", className: "api-get" },
              { type: "doc", id: "campaign/member/vouchers/voucher-by-code", className: "api-get" },
              { type: "doc", id: "campaign/member/vouchers/redeem-voucher", className: "api-post" },
            ],
          },
          {
            type: "category",
            label: "Rewards",
            items: [
              { type: "doc", id: "campaign/member/rewards/rewards-detail", className: "api-get" },
              { type: "doc", id: "campaign/member/rewards/reward-by-id", className: "api-get" },
              { type: "doc", id: "campaign/member/rewards/redeem-reward", className: "api-post" },
            ],
          },
        ],
      },
      {
        type: "category",
        label: "Loyalty",
        items: [
          {
            type: "category",
            label: "Loyalty Point",
            items: [
              { type: "doc", id: "campaign/loyalty/loyalty-point/give-loyalty-point", className: "api-post" },
              { type: "doc", id: "campaign/loyalty/loyalty-point/deduct-loyalty-point", className: "api-delete" },
              { type: "doc", id: "campaign/loyalty/loyalty-point/spending-loyalty-point", className: "api-post" },
              { type: "doc", id: "campaign/loyalty/loyalty-point/cancel-spending-loyalty-point", className: "api-post" },
              { type: "doc", id: "campaign/loyalty/loyalty-point/calculate-spending-reward", className: "api-post" },
            ],
          },
          {
            type: "category",
            label: "Loyalty Members",
            items: [
              { type: "doc", id: "campaign/loyalty/loyalty-members/member-authorize", className: "api-post" },
              { type: "doc", id: "campaign/loyalty/loyalty-members/loyalty-members", className: "api-get" },
              { type: "doc", id: "campaign/loyalty/loyalty-members/loyalty-member", className: "api-get" },
              { type: "doc", id: "campaign/loyalty/loyalty-members/loyalty-member-history", className: "api-get" },
              { type: "doc", id: "campaign/loyalty/loyalty-members/bulk-create-members", className: "api-post" },
              { type: "doc", id: "campaign/loyalty/loyalty-members/topup-online", className: "api-post" },
              { type: "doc", id: "campaign/loyalty/loyalty-members/topup-offline", className: "api-post" },
            ],
          },
          {
            type: "category",
            label: "Loyalty Balance",
            items: [
              { type: "doc", id: "campaign/loyalty/loyalty-balance/get-loyalty-balances", className: "api-get" },
              { type: "doc", id: "campaign/loyalty/loyalty-balance/spend-loyalty-balance", className: "api-post" },
            ],
          },
        ],
      },
      {
        type: "category",
        label: "Voucher",
        items: [
          "campaign/voucher/overview",
          { type: "doc", id: "campaign/voucher/get-voucher-batches", className: "api-get" },
          { type: "doc", id: "campaign/voucher/voucher-by-code", className: "api-post" },
          { type: "doc", id: "campaign/voucher/voucher-batch-by-key", className: "api-get" },
          { type: "doc", id: "campaign/voucher/issue-voucher", className: "api-post" },
          { type: "doc", id: "campaign/voucher/void-voucher", className: "api-post" },
          { type: "doc", id: "campaign/voucher/reinstate-voucher", className: "api-patch" },
          { type: "doc", id: "campaign/voucher/bulk-redeem-voucher", className: "api-post" },
        ],
      },
      {
        type: "category",
        label: "Campaign",
        items: [
          { type: "doc", id: "campaign/chop-stamp", className: "api-post" },
          { type: "doc", id: "campaign/gourmet-card", className: "api-post" },
        ],
      },
    ]},


    { type: "category", label: "Short Message Service", items: [
      "sms/overview",
      { type: "doc", id: "sms/send-sms", className: "api-post" },
    ]},

    { type: "category", label: "Push Notification", items: [
      "push-notification/overview",
      { type: "doc", id: "push-notification/push-to-merchant", className: "api-post" },
    ]},

    { type: "category", label: "e-Commerce Plugin", items: [
      "ecom-plugin/overview",
      "ecom-plugin/lowCodeCheckout",
      "ecom-plugin/wooCommerce",
      "ecom-plugin/opencart",
      "ecom-plugin/easystore",
      {
        type: "link",
        label: "SiteGiant",
        href: "https://support.sitegiant.com/knowledge-base/how-to-set-up-revenue-monster-payment-gateway/",
      },
    ]},

    { type: "category", label: "Appendix", items: [
      "appendix-overview",
      "payment-method",
      "product-terms",
      "error-codes",
      "bank-code",
      "quickstart/sdk",
      "quickstart/mobile-sdk",
      "appendix-downloads",
    ]},
  ],
};
