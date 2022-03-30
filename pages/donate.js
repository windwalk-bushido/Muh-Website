const wallet_addresses_list = [
  {
    coin_type: "bitcoin",
    coin_name: "Bitcoin",
    wallet_address: "tcbbetjTerH9r5EPR88Cb6A8enYiEQLeQ2zwBrDUgwjdmAe8VkC7hukSzRZeqJJ3",
    wallet_address_field_id: "wallet_address_field_1",
  },
  {
    coin_type: "bitcoin",
    coin_name: "Bitcoin Classic",
    wallet_address: "kJ9YGBabrRDA2h8MXxX6RrFruQbd6a4qRFiYHHXDvZjjH7SyNcPdGVqYqRJxHH9T",
    wallet_address_field_id: "wallet_address_field_2",
  },
  {
    coin_type: "bitcoin",
    coin_name: "Bitcoin Cash",
    wallet_address: "NKGzuUae7aFegdKt6uxiHECpzzW5UurumFxfu4mz88Wp83rVyjmqDWyZK4Gh4rvK",
    wallet_address_field_id: "wallet_address_field_3",
  },
  {
    coin_type: "ethereum",
    coin_name: "Ethereum",
    wallet_address: "3iTz9z95vJzzM2rfnDg6tAg6WRaxSNDeHzJDpzDyhtrQZYEieBYGfFw4GhYHPZE2",
    wallet_address_field_id: "wallet_address_field_4",
  },
  {
    coin_type: "ethereum",
    coin_name: "Ethereum Classic",
    wallet_address: "bJ85uEc2UxNNdwU9BRahYWKzWuyR33Eq9Dz7zrdbVwex5H5wJcCemTWb9cdSFZrN",
    wallet_address_field_id: "wallet_address_field_5",
  },
  {
    coin_type: "zcash",
    coin_name: "ZCash",
    wallet_address: "LYCWwNT7Q2DWu2td3gVF4WamiZQh9kVG38kUNaZcchCVDfRWXUJa2karAkXdELgX",
    wallet_address_field_id: "wallet_address_field_6",
  },
  {
    coin_type: "monero",
    coin_name: "Monero",
    wallet_address: "dRF5TZCQgtirmG7kZhab4ETYzrMuzBbNPqNViiYTq3ecSQNJDPRDanKFTMXQ8Zhp",
    wallet_address_field_id: "wallet_address_field_7",
  },
  {
    coin_type: "monero",
    coin_name: "Monero Classic",
    wallet_address: "6yv9KSXjZgGS9kxCWT5xAVHVvkpgN9ubw6vmKbB5rumWM67ti6BDWLRrRypuSxCD",
    wallet_address_field_id: "wallet_address_field_8",
  },
  {
    coin_type: "dash",
    coin_name: "Dash",
    wallet_address: "6kkjaizAtBPR73caxhXSe3Zdzr6UEc4DDZ3i48MTAScWcPa3pfuMLGRMaGWwVWu2",
    wallet_address_field_id: "wallet_address_field_9",
  },
  {
    coin_type: "coin",
    coin_name: "LiteCoin",
    wallet_address: "dSJ5g37B6PFQzepPYuzwq9WbKcZr2WHFGcxaRQ75pCUcKDUFYFXG9MuW7pRCjiC3",
    wallet_address_field_id: "wallet_address_field_10",
  },
  {
    coin_type: "coin",
    coin_name: "USDCoin",
    wallet_address: "Lk6XW4jQcC5SRcpXiyZQwaPmLGBh2ARJKzUZG5UKNG2UYcgvb24xrr4D3yB2FAXN",
    wallet_address_field_id: "wallet_address_field_11",
  },
  {
    coin_type: "chainlink",
    coin_name: "Chainlink",
    wallet_address: "45DWxjzAYNV9BHa4VFRmm2aPWFaT29crW2wy9LafTWW3PLEDtb7Civ2xqnYwhSxm",
    wallet_address_field_id: "wallet_address_field_12",
  },
];

function RenderIcon(icon) {
  return (
    <p className="text-8xl">
      <FontAwesomeIcon icon={icon} />
    </p>
  );
}

function InjectIcon(icon_type) {
  switch (icon_type) {
    case "bitcoin":
      return RenderIcon(faBitcoin);
    case "zcash":
      return RenderIcon(faMoneyBillWave);
    case "ethereum":
      return RenderIcon(faEthereum);
    case "dash":
      return RenderIcon(faDyalog);
    case "monero":
      return RenderIcon(faMonero);
    case "chainlink":
      return RenderIcon(faDiceD20);
    default:
      return RenderIcon(faDonate);
  }
}

function TriggerToast() {
  let toast = document.getElementById("toast");
  toast.classList.remove("hidden");
  setTimeout(function () {
    toast.classList.add("hidden");
  }, 5000);
}

import Title from "../components/page_title";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin, faEthereum, faDyalog, faMonero } from "@fortawesome/free-brands-svg-icons";
import { faMoneyBillWave, faDiceD20, faDonate, faCopy } from "@fortawesome/free-solid-svg-icons";

export default function Donate() {
  return (
    <>
      <Title page_title="Donate to Milijan Mosić" />
      <Nav />
      <main className="flex flex-col justify-center items-center w-full">
        <h1 className="pt-12 mb-4 text-center text-5xl">Crypto wallets</h1>
        <div className="flex flex-wrap flex-col md:flex-row justify-around w-full lg:w-9/12 pr-8 md:pr-0 mt-4 mb-20">
          {wallet_addresses_list.map((element, id) => (
            <div
              className="w-full md:w-64 lg:w-80 m-4 mt-8 mb-8 rounded-xl shadow-xl transition duration-150 ease-out shadow-green-300/20 hover:shadow-green-300/70 bg-gray-800"
              key={id}
            >
              <div className="flex justify-center items-center w-full h-48 rounded-tl-xl rounded-tr-xl opacity-90 bg-gradient-to-b from-gray-800 via-black to-gray-800 text-green-300">
                {InjectIcon(element.coin_type)}
              </div>
              <div className="flex flex-column flex-wrap justify-center p-4">
                <h5 className="mb-4 text-3xl font-bold">{element.coin_name}</h5>
                <p className="p-4 rounded-xl text-lg font-mono break-all bg-gray-700" id={element.wallet_address_field_id}>
                  {element.wallet_address}
                </p>
                <button
                  className="flex justify-center items-center w-12 h-12 p-4 pt-2 pb-2 mt-4 shadow-xl rounded-full text-xl transition duration-150 ease-out hover:cursor-pointer bg-green-300 hover:bg-black text-black hover:text-green-300 hover:shadow-md hover:shadow-green-300"
                  onClick={() => {
                    navigator.clipboard.writeText(element.wallet_address);
                    TriggerToast();
                  }}
                >
                  <FontAwesomeIcon icon={faCopy} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div
          id="toast"
          className="animate-pulse w-64 m-8 p-4 ring-1 hidden fixed bottom-0 text-center font-bold rounded-xl shadow-xl shadow-green-300/30 ring-green-300 bg-black text-green-300"
        >
          Wallet address copied!
        </div>
      </main>
      <Footer />
    </>
  );
}
