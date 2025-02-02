import { useEffect } from "react";
import { MyNavbar } from "../../components/navbars/Navbar";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { Content } from "../../components/dashboard/Content";
import { useProducts } from "../../shared/hooks/useProduct"

export const DashboardPage = () => {
  const { getProducts, allProducts, isFetching } = useProducts();

  if (isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <div className="dashboard-container">
      <MyNavbar />
      <div className="container mt-5">
        <Content products={allProducts || []} getProducts={getProducts} />
      </div>
    </div>
  );
};