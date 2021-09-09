import Header from "../components/Header";
import { Link } from "react-router-dom";
import { ADD_VIRTUAL_CARDS_LINK } from "../helpers/links";
import Page from "./Page";
import useWallet from "../hooks/useWallet";
import LoadingCard from "../components/LoadingCard";
import CreditCard from "../components/CreditCard";

export default function VirtualCards() {
  const { wallets } = useWallet();

  return (
    <>
      <Page className={"bg-snow"}>
        <Header
          pageTitle={"Virtual Cards"}
          rightItem={() => (
            <div className="em_side_right">
              <Link
                to={ADD_VIRTUAL_CARDS_LINK}
                className="size-14 white-onScroll color-primary hover:color-blue"
              >
                + Add
              </Link>
            </div>
          )}
        />

        <section className="padding-t-80 padding-l-20 padding-r-20 emPage__myCards padding-b-30">
          <div className="emBK__cards">
            {/* ele__card*/}
            {wallets.length ? (
              wallets.map((wallet) => (
                <CreditCard
                  key={wallet.id}
                  expirationDate={wallet.cardDetails.expirationDate}
                  cardNumber={wallet.cardDetails.number}
                  cardHolderName={wallet.cardDetails.name}
                  walletName={wallet.name}
                  cvv={wallet.cardDetails.cvv}
                  balance={wallet.balance}
                />
              ))
            ) : (
              <>
                {[...Array(4)].map((i, index) => (
                  <LoadingCard key={index} />
                ))}
              </>
            )}
            {/* .ele__card*/}
          </div>
        </section>
      </Page>
    </>
  );
}
