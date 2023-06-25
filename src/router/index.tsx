import { createBrowserRouter, Outlet } from "react-router-dom";

import HomeLayout from "../layout/HomeLayout";
import AuthLayout from "../layout/AuthLayout";
import CoinManagementLayout from "../layout/CoinManagementLayout";
import PortfolioLayout from "../layout/PortfolioLayout";

import ForgotPassword from "../pages/Auth/ForgotPassword";
import LoginPage from "../pages/Auth/Login";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";

import CoinManagement from "../pages/CoinManagement/CoinManagement";
import Coins from "../pages/CoinManagement/Coins/Coins";
import CreateCoins from "../pages/CoinManagement/Coins/CreateCoins";
import UpdateCoins from "../pages/CoinManagement/Coins/UpdateCoins";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NewsFeedLayout from "../layout/NewsFeedLayout";
import NewsFeed from "../pages/NewsFeed/NewsFeed";
import Portfolio from "../pages/Portfolio/Portfolio";
import FuturesLayout from "../layout/FuturesLayout";
import Futures from "../pages/Futures/Futures";
import TotalWalletLayout from "../layout/TotalWalletLayout";
import TotalWallet from "../pages/TotalWallet/TotalWallet";
import CoinCategory from "../pages/CoinCategory/CoinCategory";
import CoinPrices from "../pages/CoinPrices/CoinPrices";
import FuturesGame from "../pages/FuturesGame/FuturesGame";
import MontlyPriceAnalysisChart from "../pages/CoinList/MontlyPriceAnalysisChart";
import MovingAveragePages from "../pages/MovingAverage/MovingAveregePages";
import CoinTracker from "../components/CoinTracker/CoinTracker";
import CoinAnalysis from "../pages/CoinAnalysis/CoinAnalysis";


const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    errorElement: <NotFound />,
    element: <Root />,
    children: [
      {
        element: <AuthLayout children={<Outlet />} />,
        children: [
          {
            path: "/login",
            element: <LoginPage />,
          },
          {
            path: "/forgot-password",
            element: <ForgotPassword />,
          },
        ],
      },
      {
        element: <HomeLayout children={<Outlet />} />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
        ],
      },
      {
        element: <CoinManagementLayout children={<Outlet />} />,
        children: [
          {
            path: "/coin-management",
            element: <CoinManagement />,
          },
          {
            path: "/coin-management/monthly-price-analysis-chart",
            element: <MontlyPriceAnalysisChart />,
          },
          {
            path: "/coin-management/coin-analysis",
            element: <CoinAnalysis />,
          },
          {
            path: "/coin-management/coin-tracker",
            element: <CoinTracker />,
          },
          {
            path: "/coin-management/moving-averages",
            element: <MovingAveragePages />,
          },
          {
            path: "/coin-management/coin-prices",
            element: <CoinPrices />,
          },
          {
            path: "/coin-management/coin-category",
            element: <CoinCategory />,
          },
          {
            path: "/coin-management/coins",
            element: <Coins />,
          },
          {
            path: "/coin-management/coins/add",
            element: <CreateCoins />,
          },
          {
            path: "/user-management/coins/update/:id",
            element: <UpdateCoins />,
          },
        ],
      },
      {
        element: <NewsFeedLayout children={<Outlet />} />,
        children: [
          {
            path: "/news-feed",
            element: <NewsFeed />,
          }
        ],
      },
      {
        element: <PortfolioLayout children={<Outlet />} />,
        children: [
          {
            path: "/portfolio",
            element: <Portfolio />,
          }
        ],
      },
      {
        element: <FuturesLayout children={<Outlet />} />,
        children: [
          {
            path: "/futures",
            element: <Futures />,
          },
          {
            path: "/futures-game",
            element: <FuturesGame />,
          }
        ],
      },
      {
        element: <TotalWalletLayout children={<Outlet />} />,
        children: [
          {
            path: "/total-wallet",
            element: <TotalWallet />,
          }
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
