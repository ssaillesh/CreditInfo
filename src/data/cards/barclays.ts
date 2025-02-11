import type { z } from "zod";

import { schemas } from "@/generated/api.client.js";

export const BARCLAYS_CARDS: z.input<typeof schemas.CreditCard>[] = [
  {
    name: "AAdvantage Aviator Red World Elite",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.AMERICAN,
    isBusiness: false,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/aadvantage-aviator-red-world-elite-mastercard/",
    imageUrl: "/images/barclays/aadvantage-aviator-red-world-elite.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 70_000 }],
        spend: 99 + 0.01,
        days: 90,
        credits: [],
        details: "ANY purchase + AF.",
        url: "https://cards.barclaycardus.com/banking/credit-card/american-airlines/mastercard-mastercard-world-elite/out-of-home/d35e9a0c-7c9b-4509-a56a-f6801a1eff9e/",
      },
      {
        amount: [{ amount: 60_000 }],
        spend: 99 + 0.01,
        days: 90,
        credits: [],
        details: "ANY purchase + AF.",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 75_000 }],
        spend: 99 + 0.01,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "AAdvantage Aviator World Elite Business",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.AMERICAN,
    isBusiness: true,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://creditcards.aa.com/barclay-credit-card-aviator-business-american-airlines-aadvantage/",
    imageUrl: "/images/barclays/aadvantage-aviator-world-elite-business.png",
    credits: [
      {
        value: 50,
        description: "First checked bag free",
        weight: 0.5,
      },
    ],
    offers: [],
    historicalOffers: [
      {
        amount: [{ amount: 80_000 }],
        spend: 2000,
        days: 90,
        credits: [
          {
            value: 95,
            description: "$95 Statement Credit",
            weight: 1,
          },
        ],
      },
    ],
  },
  {
    name: "AARP Essential Rewards",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/aarp-essential-rewards-mastercard/",
    imageUrl: "/images/barclays/aarp-essential-rewards.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 100 }],
        spend: 500,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100 }],
        spend: 500,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "AARP Travel Rewards",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/aarp-travel-rewards-mastercard/",
    imageUrl: "/images/barclays/aarp-travel-rewards.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 100 }],
        spend: 500,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100 }],
        spend: 500,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Carnival World Mastercard",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.CARNIVAL,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/carnival-world-mastercard/",
    imageUrl: "/images/barclays/carnival-world-mastercard.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 20_000 }],
        spend: 500,
        days: 90,
        credits: [],
        details: "Requires ANY purchase.",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 20_000 }],
        spend: 0.01,
        days: 365,
        credits: [],
      },
      {
        amount: [{ amount: 25_000 }],
        spend: 500,
        days: 90,
        credits: [],
        details: "Requires ANY purchase.",
        url: "https://cards.barclaycardus.com/banking/cards/carnival-world-mastercard/",
      },
    ],
  },
  {
    name: "Emirates Skywards Premium World Elite",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.EMIRATES,
    isBusiness: false,
    annualFee: 499,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/emirates-skywards-premium-world-elite-mastercard/",
    imageUrl: "/images/barclays/emirates-skywards-premium-world-elite.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 70_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 70_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Emirates Skywards Rewards World Elite",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.EMIRATES,
    isBusiness: false,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/emirates-skywards-rewards-world-elite-mastercard/",
    imageUrl: "/images/barclays/emirates-skywards-rewards-world-elite.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Frontier Airlines World",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.FRONTIER,
    isBusiness: false,
    annualFee: 89,
    isAnnualFeeWaived: true,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/frontier-airlines-world-mastercard/",
    imageUrl: "/images/barclays/frontier-airlines-world.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 40_000 }],
        spend: 500,
        days: 90,
        credits: [],
        details: "Requires paying AF.",
      },
      {
        amount: [{ amount: 60_000 }],
        spend: 2000,
        days: 180,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 2000,
        days: 180,
        credits: [],
      },
    ],
  },
  {
    name: "Hawaiian Airlines World Elite",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.HAWAIIAN,
    isBusiness: false,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/hawaiian-airlines-world-elite-mastercard/",
    imageUrl: "/images/barclays/hawaiian-airlines-world-elite.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 70_000 }],
        spend: 2000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 80_000 }],
        spend: 2000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "JetBlue",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.JETBLUE,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/jetblue-card/",
    imageUrl: "/images/barclays/jetblue.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 10_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 20_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "JetBlue Business",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.JETBLUE,
    isBusiness: true,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/jetblue-business-card/",
    imageUrl: "/images/barclays/jetblue-business.png",
    credits: [
      {
        value: 50,
        description: "Free checked bag",
        weight: 0.5,
      },
    ],
    offers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 4000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 2000,
        days: 90,
        credits: [],
        expiration: "2021-04-01",
      },
    ],
  },
  {
    name: "JetBlue Plus",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.JETBLUE,
    isBusiness: false,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/jetblue-plus-card/",
    imageUrl: "/images/barclays/jetblue-plus.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 80_000 }],
        spend: 1000,
        days: 90,
        credits: [],
        url: "https://cards.barclaycardus.com/banking/credit-card/jetblue/mastercard-mastercard-world-elite/banner/9085d860-d048-4cc3-a426-3d6d2790b270/?referrerid=PTRBAHPPB",
        expiration: "2024-12-03",
      },
      {
        amount: [{ amount: 50_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 80_000 }],
        spend: 1000,
        days: 90,
        credits: [],
        expiration: "2022-12-01",
      },
    ],
  },
  {
    name: "Lufthansa Miles & More",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.LUFTHANSA,
    isBusiness: false,
    annualFee: 89,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/lufthansa-miles-more-world-elite-mastercard",
    imageUrl: "/images/barclays/lufthansa-miles-and-more.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 80_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 80_000 }],
        spend: 3000,
        credits: [],
        days: 90,
      },
    ],
  },
  {
    name: "Upromise",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/upromise-world-mastercard/",
    imageUrl: "/images/barclays/upromise.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 100 }],
        spend: 500,
        days: 90,
        credits: [],
        url: "https://cards.barclaycardus.com/banking/cards/upromise-world-mastercard/",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100 }],
        spend: 500,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Wyndham Rewards Earner",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.WYNDHAM,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.wyndhamrewardscreditcard.com/#earner",
    imageUrl: "/images/barclays/wyndham-rewards-earner.svg",
    credits: [],
    offers: [
      {
        amount: [{ amount: 75_000 }],
        spend: 2000,
        days: 180,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 75_000 }],
        spend: 2000,
        days: 180,
        credits: [],
      },
    ],
  },
  {
    name: "Wyndham Rewards Earner Business",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.WYNDHAM,
    isBusiness: true,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.wyndhamrewardscreditcard.com/#earnerbusiness",
    imageUrl: "/images/barclays/wyndham-rewards-earner-business.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 4000,
        days: 90,
        credits: [],
      },
      {
        amount: [{ amount: 100_000 }],
        spend: 15_000,
        days: 365,
        credits: [],
        details: "High spend requirement, but long duration.",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 90_000 }],
        spend: 2000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Wyndham Rewards Earner Plus",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.WYNDHAM,
    isBusiness: false,
    annualFee: 75,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.wyndhamrewardscreditcard.com/#earnerplus",
    imageUrl: "/images/barclays/wyndham-rewards-earner-plus.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 75_000 }],
        spend: 2000,
        days: 180,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 2000,
        days: 180,
        credits: [],
      },
    ],
  },
  {
    name: "Hawaiian Airlines World Elite Business",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.HAWAIIAN,
    isBusiness: true,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/hawaiian-airlines-world-elite-business-mastercard/",
    imageUrl: "/images/barclays/hawaiian-airlines-world-elite-business.png",
    credits: [
      {
        value: 99,
        description: "Hawaiian statement credit",
        weight: 0.8,
      },
    ],
    offers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 2000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 70_000 }],
        spend: 0.01,
        days: 90,
        credits: [],
        details: "Requires one purchase of ANY amount.",
      },
      {
        amount: [{ amount: 50_000 }],
        spend: 2000,
        days: 90,
        credits: [],
        url: "https://cards.barclaycardus.com/banking/cards/hawaiian-airlines-world-elite-business-mastercard/",
      },
      {
        amount: [{ amount: 90_000 }],
        spend: 10_000,
        days: 365,
        credits: [],
        url: "https://cards.barclaycardus.com/banking/cards/hawaiian-airlines-world-elite-business-mastercard/",
      },
      {
        amount: [{ amount: 45_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Breeze",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.BREEZE,
    isBusiness: false,
    annualFee: 89,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/credit-card/breeze-airways/visa-visa-signature-preferred/partner-banner/d4de94d1-c1da-4237-9eff-df975fb4bb87/?referrerid=PTRBAHPE50XX0324",
    imageUrl: "/images/barclays/breeze.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 2000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 2000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Xbox",
    issuer: schemas.IssuersEnum.enum.BARCLAYS,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.BARCLAYS,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://cards.barclaycardus.com/banking/cards/xbox-mastercard/",
    imageUrl: "/images/barclays/xbox.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 5_000 }],
        spend: 0.01,
        days: 180,
        credits: [],
        details: "Requires ANY purchase.",
      },
      {
        amount: [{ amount: 7_000 }],
        spend: 7000,
        days: 365,
        credits: [
          {
            description: "2x 3-month Game Pass Ultimate",
            currency: "USD",
            value: 17 * 6,
            weight: 0.5,
          },
        ],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 5_000 }],
        spend: 0.01,
        days: 180,
        credits: [],
        details: "Requires ANY purchase.",
      },
    ],
  },
];
