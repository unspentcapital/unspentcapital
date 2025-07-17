"use client";
import { useEffect, useState } from "react";

interface Rates {
  gbp: number;
  chf: number;
  eur: number;
  usd: number;
  cad: number;
  aud: number;
  nzd: number;
  cny: number;
  thb: number;
  jpy: number;
}

export default function FiatTicker() {
  const [rates, setRates] = useState<Rates>({
    gbp: 0,
    chf: 0,
    eur: 0,
    usd: 0,
    cad: 0,
    aud: 0,
    nzd: 0,
    cny: 0,
    thb: 0,
    jpy: 0,
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,nzd,gbp,thb,eur,chf,jpy,cny,cad,aud"
        );
        const data = await response.json();

        if (!response.ok) {
          let errorBody = "Could not read error response body.";
          try {
            errorBody = await response.text();
          } catch (e) {
            // Ignore if reading response body fails
          }
          throw new Error(
            `HTTP error! Status: ${response.status} ${response.statusText}. Body: ${errorBody}`
          );
        }

        // const data = await response.json(); // Moved this line up for response.ok check context, but it should be here if response.ok passed.
        // Re-declaring data here after response.ok check and before .json() call.
        // const data = await response.json(); // This line was effectively duplicated in thought process, original position is fine after response.ok check.

        if (data && data.bitcoin) {
          setRates({
            gbp: Math.round((1 / data.bitcoin.gbp) * 1e8),
            chf: Math.round((1 / data.bitcoin.chf) * 1e8),
            eur: Math.round((1 / data.bitcoin.eur) * 1e8),
            usd: Math.round((1 / data.bitcoin.usd) * 1e8),
            cad: Math.round((1 / data.bitcoin.cad) * 1e8),
            aud: Math.round((1 / data.bitcoin.aud) * 1e8),
            nzd: Math.round((1 / data.bitcoin.nzd) * 1e8),
            cny: Math.round((1 / data.bitcoin.cny) * 1e8),
            thb: Math.round((1 / data.bitcoin.thb) * 1e8),
            jpy: Math.round((1 / data.bitcoin.jpy) * 1e8),
          });
        } else {
          console.error("Error fetching rates: 'bitcoin' key missing in API response or data is malformed.", data);
          // Optionally, set an error state or keep previous rates
        }
      } catch (error) {
        console.error("Error fetching rates:", error);
        if (error instanceof TypeError && error.message === "Failed to fetch") {
          console.warn(
            "A 'Failed to fetch' error occurred. This usually indicates a network issue (e.g., no internet connection, DNS resolution failure), a CORS policy problem, or the API endpoint being temporarily unreachable. Please check your network connection and the API status."
          );
        }
        // Optionally, set an error state here to inform the user in the UI
      }
    };

    fetchRates();
    const interval = setInterval(fetchRates, 60000);
    return () => clearInterval(interval);
  }, []);

  const currencySymbol = (currency: string) => {
    switch (currency) {
      case "gbp":
        return "£GBP";
      case "chf":
        return "₣CHF";
      case "eur":
        return "€EUR";
      case "usd":
        return "$USD";
      case "cad":
        return "$CAD";
      case "aud":
        return "$AUD";
      case "nzd":
        return "$NZD";
      case "cny":
        return "¥CNY";
      case "thb":
        return "฿THB";
      case "jpy":
        return "¥JPY";
      default:
        return currency.toUpperCase();
    }
  };

  return (
    <div className="overflow-hidden bg-unspent-bg-secondary py-2 w-full border-t border-[var(--color-bg-primary)] shadow-xl">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, idx) => (
          <div key={idx} className="inline-flex">
            {Object.entries(rates).map(([currency, sats]) => (
              <span
                key={`${currency}-${idx}`}
                className="mx-6 inline-block text-lg text-unspent-accent-secondary font-semibold"
              >
                {currencySymbol(currency)} {sats.toLocaleString()}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
  
  
  
}
