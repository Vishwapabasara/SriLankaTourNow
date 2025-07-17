import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Expanded currency list with major global currencies
const currencyList = [
  "LKR", "EUR", "GBP", "AUD", "INR", "JPY", "CAD", "CHF", "CNY", "KRW", 
  "SGD", "HKD", "THB", "MYR", "PHP", "VND", "IDR", "BRL", "MXN", "RUB"
];

// Currency names for better display
const currencyNames = {
  LKR: "Sri Lankan Rupee",
  EUR: "Euro",
  GBP: "British Pound",
  AUD: "Australian Dollar",
  INR: "Indian Rupee",
  JPY: "Japanese Yen",
  CAD: "Canadian Dollar",
  CHF: "Swiss Franc",
  CNY: "Chinese Yuan",
  KRW: "South Korean Won",
  SGD: "Singapore Dollar",
  HKD: "Hong Kong Dollar",
  THB: "Thai Baht",
  MYR: "Malaysian Ringgit",
  PHP: "Philippine Peso",
  VND: "Vietnamese Dong",
  IDR: "Indonesian Rupiah",
  BRL: "Brazilian Real",
  MXN: "Mexican Peso",
  RUB: "Russian Ruble"
};

const ForexGraphPage = () => {
  const [graphData, setGraphData] = useState([]);
  const [latestRates, setLatestRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [converter, setConverter] = useState({
    amount: 1,
    from: "USD",
    to: "LKR",
    result: null,
  });

  // Sample data for demonstration (replace with real API data)
  const generateSampleRates = () => {
    const baseRates = {
      LKR: 298.50,
      EUR: 0.85,
      GBP: 0.73,
      AUD: 1.45,
      INR: 83.25,
      JPY: 148.50,
      CAD: 1.35,
      CHF: 0.88,
      CNY: 7.15,
      KRW: 1320.00,
      SGD: 1.32,
      HKD: 7.80,
      THB: 35.50,
      MYR: 4.65,
      PHP: 56.20,
      VND: 24350.00,
      IDR: 15750.00,
      BRL: 5.15,
      MXN: 18.25,
      RUB: 92.50
    };
    
    // Add small random variations to simulate real-time changes
    const rates = {};
    Object.entries(baseRates).forEach(([currency, rate]) => {
      const variation = (Math.random() - 0.5) * 0.02; // ±1% variation
      rates[currency] = rate * (1 + variation);
    });
    
    return rates;
  };

  const fetchRates = async () => {
    try {
      setLoading(true);
      
      // Using sample data for demonstration
      // In production, uncomment the API call below
      const rates = generateSampleRates();
      
      /* 
      // Real API call (uncomment when ready to use)
      const res = await axios.get(
        `https://api.exchangeratesapi.io/v1/latest?access_key=YOUR_API_KEY&base=USD&symbols=${currencyList.join(",")}`
      );
      const rates = res.data.rates;
      */
      
      const timestamp = new Date().toLocaleTimeString();
      setLatestRates(rates);
      setLastUpdated(new Date().toLocaleString());

      const newEntry = { time: timestamp };
      currencyList.forEach((cur) => {
        newEntry[cur] = rates[cur];
      });

      setGraphData((prev) => [...prev.slice(-19), newEntry]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching exchange rates", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
    const interval = setInterval(fetchRates, 30000); // every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const handleConvert = () => {
    if (converter.from === "USD" && latestRates[converter.to] && converter.amount) {
      const result = converter.amount * latestRates[converter.to];
      setConverter((prev) => ({ ...prev, result }));
    } else if (converter.to === "USD" && latestRates[converter.from] && converter.amount) {
      const result = converter.amount / latestRates[converter.from];
      setConverter((prev) => ({ ...prev, result }));
    } else if (latestRates[converter.from] && latestRates[converter.to] && converter.amount) {
      // Convert from any currency to any currency via USD
      const usdAmount = converter.amount / latestRates[converter.from];
      const result = usdAmount * latestRates[converter.to];
      setConverter((prev) => ({ ...prev, result }));
    } else {
      alert("Please enter a valid amount and select currencies.");
    }
  };

  const getChangeIndicator = (currency) => {
    if (graphData.length < 2) return null;
    const current = graphData[graphData.length - 1][currency];
    const previous = graphData[graphData.length - 2][currency];
    if (current > previous) return "↗️";
    if (current < previous) return "↘️";
    return "→";
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">
              Currency Exchange Rates
            </h1>
            <p className="text-slate-300 text-lg">
              Live exchange rates for travelers worldwide
            </p>
            {lastUpdated && (
              <p className="text-sm text-slate-400 mt-3">
                Last updated: {lastUpdated}
              </p>
            )}
          </div>
        </div>
        
        <div className="p-8 space-y-8">

          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-slate-600"></div>
              <p className="mt-3 text-slate-600 text-lg">Loading exchange rates...</p>
            </div>
          )}

          {/* Professional Rate Table */}
          <div className="bg-slate-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
              Current Exchange Rates
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md">
                <thead className="bg-slate-700 text-white">
                  <tr>
                    <th className="p-4 text-left font-semibold">Currency</th>
                    <th className="p-4 text-left font-semibold">Country/Region</th>
                    <th className="p-4 text-right font-semibold">1 USD equals</th>
                    <th className="p-4 text-center font-semibold">Change</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {currencyList.map((currency, index) => (
                    <tr key={currency} className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="p-4 font-bold text-slate-700 text-lg">{currency}</td>
                      <td className="p-4 text-slate-600">{currencyNames[currency]}</td>
                      <td className="p-4 text-right font-mono text-slate-800 text-lg">
                        {latestRates[currency] ? latestRates[currency].toFixed(4) : "Loading..."}
                      </td>
                      <td className="p-4 text-center text-xl">
                        {getChangeIndicator(currency)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Professional Chart */}
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 text-slate-800 text-center">
              Exchange Rate Trends
            </h3>
            <div className="w-full h-[400px] bg-white rounded-lg p-4 shadow-md">
              <ResponsiveContainer>
                <LineChart data={graphData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="time" 
                    tick={{ fontSize: 12, fill: '#475569' }}
                    stroke="#64748b"
                  />
                  <YAxis 
                    domain={["auto", "auto"]} 
                    tick={{ fontSize: 12, fill: '#475569' }}
                    stroke="#64748b"
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "white", 
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                    }} 
                  />
                  <Legend />
                  {currencyList.slice(0, 8).map((cur, index) => (
                    <Line
                      key={cur}
                      type="monotone"
                      dataKey={cur}
                      stroke={
                        ["#0f172a", "#1e293b", "#334155", "#475569", "#64748b", "#94a3b8", "#cbd5e1", "#e2e8f0"][index]
                      }
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 4, fill: "#0f172a" }}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Travel-Focused Currency Converter */}
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 text-slate-800 text-center">
              Travel Currency Converter
            </h3>
            <p className="text-slate-600 text-center mb-8">
              Plan your travel budget with live exchange rates
            </p>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">Amount</label>
                  <input
                    type="number"
                    value={converter.amount}
                    onChange={(e) =>
                      setConverter((prev) => ({ ...prev, amount: parseFloat(e.target.value) || 0 }))
                    }
                    className="w-full border-2 border-slate-300 p-3 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent text-lg"
                    placeholder="Enter amount"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">From</label>
                  <select
                    className="w-full border-2 border-slate-300 p-3 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent text-lg"
                    value={converter.from}
                    onChange={(e) =>
                      setConverter((prev) => ({ ...prev, from: e.target.value }))
                    }
                  >
                    <option value="USD">USD - US Dollar</option>
                    {currencyList.map((cur) => (
                      <option key={cur} value={cur}>
                        {cur} - {currencyNames[cur]}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">To</label>
                  <select
                    className="w-full border-2 border-slate-300 p-3 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent text-lg"
                    value={converter.to}
                    onChange={(e) =>
                      setConverter((prev) => ({ ...prev, to: e.target.value }))
                    }
                  >
                    <option value="USD">USD - US Dollar</option>
                    {currencyList.map((cur) => (
                      <option key={cur} value={cur}>
                        {cur} - {currencyNames[cur]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button
                  className="bg-slate-700 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors duration-200 font-semibold text-lg shadow-lg"
                  onClick={handleConvert}
                >
                  Convert Currency
                </button>
              </div>

              {converter.result && (
                <div className="mt-6 bg-slate-100 p-6 rounded-lg border-2 border-slate-300">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-800 mb-2">
                      {converter.amount} {converter.from} = {converter.result.toFixed(2)} {converter.to}
                    </div>
                    <div className="text-slate-600">
                      Exchange rate: 1 {converter.from} = {(converter.result / converter.amount).toFixed(6)} {converter.to}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ForexGraphPage;