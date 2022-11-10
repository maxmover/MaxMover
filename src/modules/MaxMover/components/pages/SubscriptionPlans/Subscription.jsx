import { InnerPagesTopTitle } from "../../../../../common/InnerPagesTopTitle/InnerPagesTopTitle";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { HiCheckCircle } from "react-icons/hi";
import { BlueLinkBtn } from "../../../../../common/btn/Btn";
import { BsStar } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";
export const Subscription = () => {
  return (
    <>
      <div className="custom_container">
        <div className="user_managemen_top_title">
          <InnerPagesTopTitle name="Subscription Plans" />
        </div>

        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-12">
            <div className="Subscription_text">
              Tempor molestie et dictum doectus felis, est tellus egTempor
              molestie et dictum doectus felis, est tellus eget. Id dolor
              sagittis.Tempor molestie et dictum doectus felis, est tellus eget.
              Id dolor sagittis.et. Id dolor sagittis.
            </div>
          </div>
          <div className="col-12">
            <PriceCard />
          </div>
        </div>
      </div>
    </>
  );
};
const PriceCard = () => {
  const getSvgByPlanType = (planType, iconColor) => {
    switch (planType) {
      case "BASIC":
        return <VscWorkspaceTrusted style={{ color: iconColor }} />;
      case "STANDARD":
        return <BsStar style={{ color: iconColor }} />;
      case "PREMIUM":
        return <IoDiamondOutline style={{ color: iconColor }} />;
      default:
        return <VscWorkspaceTrusted style={{ color: iconColor }} />;
    }
  };
  const PriceCardApp = (props) => {
    return (
      <>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 card_top_div_col">
          <div
            className="card_top_div"
            style={{
              backgroundColor: props.backgroundColor,
              color: props.textColor,
            }}
          >
            <h5>{props.planType}</h5>
            <div className="card_icon_div">
              <span
                style={{
                  backgroundColor: props.iconBackgroundColor,
                }}
              >
                {getSvgByPlanType(props.planType, props.iconColor)}
              </span>
            </div>
            <p>{props.text}</p>
            <hr
              style={{
                backgroundColor: props.textColor,
              }}
            />
            <h3>{props.price}</h3>
            <div>
              {props.arr.cat1.map((val, i) => {
                return (
                  <div key={i} className="card_poites">
                    <span>
                      <HiCheckCircle />
                    </span>
                    {val.points}
                  </div>
                );
              })}
            </div>
            <div className="card_btn">
              <BlueLinkBtn
                style={{
                  backgroundColor: props.BtnNameBackgroundColor,
                  color: props.btnColor,
                }}
                link={props.cardLink}
                title={props.BtnName}
              />
            </div>
          </div>
        </div>
      </>
    );
  };
  const PriceCardData = [
    {
      planType: "silver",
      text: "Tempor molestie et dictum doectus felis, est tellus eget. Id dolor sagittis.",
      price: "40$ / Month",
      BtnName: "Buy Now",
      BtnNameBackgroundColor: "",
      cardLink: "/",
      cat1: [
        {
          points: "Id dolor sagittis, neque",
        },
        {
          points: "Id dolor sagittis, neque",
        },
        {
          points: "Id dolor sagittis, neque",
        },
        {
          points: "Id dolor sagittis, neque",
        },
        {
          points: "Id dolor sagittis, neque",
        },
        {
          points: "Id dolor sagittis, neque",
        },
      ],
    },
    {
      planType: "STANDARD",
      text: "Tempor molestie et dictum doectus felis, est tellus eget. Id dolor sagittis.",
      price: "40$ / Month",
      BtnName: "Buy Now",
      BtnNameBackgroundColor: "white",
      cardLink: "/",
      backgroundColor: "#3499FF",
      btnColor: "#3499FF",
      textColor: "white",
      iconBackgroundColor: "#4BA5FF",
      iconColor: "white",
      cat1: [
        {
          points: "Id dolor sagittis, neque",
        },
        {
          points: "Id dolor sagittis, neque",
        },
        {
          points: "Id dolor sagittis, neque",
        },
        {
          points: "Id dolor sagittis, neque",
        },
        {
          points: "Id dolor sagittis, neque",
        },
        {
          points: "Id dolor sagittis, neque",
        },
      ],
    },
    {
      planType: "PREMIUM",
      text: "Tempor molestie et dictum doectus felis, est tellus eget. Id dolor sagittis.",
      price: "40$ / Month",
      BtnName: "Buy Now",
      BtnNameBackgroundColor: "",
      cardLink: "/",
      cat1: [
        {
          points: "Id dolor sagittis, neque",
        },
        {
          points: "Id dolor sagittis, neque",
        },
        {
          points: "Id dolor sagittis, neque",
        },
        {
          points: "Id dolor sagittis, neque",
        },
        {
          points: "Id dolor sagittis, neque",
        },
        {
          points: "Id dolor sagittis, neque",
        },
      ],
    },
  ];
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 card_top_div_col_row">
        {PriceCardData.map((val, i) => {
          return <PriceCardApp key={i} {...val} arr={val} />;
        })}
      </div>
    </>
  );
};
