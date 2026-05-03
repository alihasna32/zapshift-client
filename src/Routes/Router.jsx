import { createBrowserRouter } from "react-router";
import { Rootlayout } from "../Layouts/Rootlayout";
import { Home } from "../Pages/Home/Home/Home";
import { Coverage } from "../Pages/Coverage/Coverage";
import { About } from "../Pages/About/About";
import error404 from '../assets/404_Error.png'
import { Authlayout } from "../Layouts/Authlayout";
import { Register } from "../Pages/Auth/Register/Register";
import { Login } from "../Pages/Auth/Login/Login";
import { Rider } from "../Pages/Rider/Rider";
import { PrivateRoute } from "./PrivateRoute";
import { SendParcel } from "../Pages/SendParcel/SendParcel";
import DashboardLayout from "../Layouts/DashboardLayout";
import Myparcels from "../Pages/Dashboard/Myparcels/Myparcels";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../Pages/Dashboard/Payment/PaymentSuccess";
import { PaymentCancelled } from "../Pages/Dashboard/Payment/PaymentCancelled";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import ApprovedRiders from "../Pages/Dashboard/ApprovedRiders/ApprovedRiders";
import UsersManagement from "../Pages/Dashboard/UsersManagement/UsersManagement";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import AdminRoute from "./AdminRoute";
import AssignRiders from "../Pages/Dashboard/AssignRiders/AssignRiders";
import RidersRoute from "./RidersRoute";
import AssignedDeliveries from "../Pages/AssignedDeliveries/AssignedDeliveries";
import CompletedDeliveries from "../Pages/Dashboard/CompletedDeliveries/CompletedDeliveries";
import ParcelTrack from "../Pages/ParcelTrack/ParcelTrack";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children:[
      {
        index: true,
        Component: Home,
      },
      {
        path: 'about',
        Component: About
      },
      {
        path: 'send-parcel',
        element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
        loader: () => fetch('/serviceCenters.json').then(res => res.json())
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("/serviceCenters.json").then(res => res.json())
      },
      {
        path: 'parcel-track/:trackingId',
        Component: ParcelTrack
      },
      {
        path: "rider",
        element: <PrivateRoute><Rider></Rider></PrivateRoute>,
        loader: () => fetch('/serviceCenters.json').then(res => res.json())
      },
      {
        path: "/*",
        element: (
          <div className="flex flex-col justify-center items-center min-h-screen gap-5">
            <img className="w-[400px]" src={error404} alt="404 Not Found" />
            <h1 className="text-6xl font-black">404 Page not found</h1>
          </div>
        ),
      },
    ]
  },
  {
    path: '/',
    Component: Authlayout,
    children: [
      {
        path: 'login',
        Component: Login,
        
      },
      {
        path: 'register',
        Component: Register,
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        index: true,
        Component: DashboardHome
      },
      {
        path: 'my-parcels',
        Component: Myparcels
      },
      {
        path: 'payment/:parcelId',
        Component: Payment
      },
      {
        path: 'payment-history',
        Component: PaymentHistory
      },
      {
        path: 'payment-success',
        Component: PaymentSuccess
      },
      {
        path: 'payment-cancelled',
        Component: PaymentCancelled
      },
      // rider only routes
      {
        path: 'assigned-deliveries',
        element: <RidersRoute><AssignedDeliveries></AssignedDeliveries></RidersRoute>
      },
      {
        path: 'completed-deliveries',
        element: <RidersRoute><CompletedDeliveries></CompletedDeliveries></RidersRoute>
      },

      // admin only routes
      {
        path: 'approve-riders',
        element: <AdminRoute><ApprovedRiders></ApprovedRiders></AdminRoute>
      },
      {
        path: 'users-management',
        element: <AdminRoute><UsersManagement></UsersManagement></AdminRoute>
      },
      {
        path: 'assign-riders',
        element: <AdminRoute><AssignRiders></AssignRiders></AdminRoute>
      }
    ]
  }
]);