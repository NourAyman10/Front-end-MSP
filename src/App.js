import React, { Fragment } from 'react'
import {Routes, Route} from "react-router-dom"
import AdminLogin from "./adminComponents/adminLogin/AdminLogin"
import AllEvents from "./adminComponents/allEvents/AllEvents"
import Dashboard from './adminComponents/dashboard/Dashboard'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './adminComponents/ProtectedRoute'
import Home from './userComponents/home/Home'
import AboutUs from './userComponents/aboutUs/AboutUs'
import OurCommittees from './userComponents/ourCommittees/OurCommittees'
import RegisterEvent from './userComponents/RegisterEvent/RegisterEvent';
import QuestionForm from './userComponents/questForm/questForm';
import EventDetails from './adminComponents/eventDetails/EventDetails'
import MoreDetailes from './userComponents/eventMoreDetailes/MoreDetailes'
import OldEvents from './userComponents/oldEvents/OldEvents'
import ErrorPage from './userComponents/errorPage/ErrorPage'
import UnderMaintenance from './userComponents/underMaintenance/UnderMaintenance'

const App = () => {
  return (
    <Fragment>
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/underMaintenance" element={<UnderMaintenance />} />
        <Route path="/errorPage" element={<ErrorPage />} />
        <Route path="/registerEvent/:id" element={<RegisterEvent />} />
        <Route path="/questForm" element={<QuestionForm />} />
        <Route path="/ourCommittees" element={<OurCommittees />} />
        <Route path="/oldEvents" element={<OldEvents />} />
        <Route path="/moreDetailes/:id" element={<MoreDetailes />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/admin/allEvents" element={<ProtectedRoute><AllEvents /></ProtectedRoute>} />
        <Route path="/admin/eventDetails" element={<ProtectedRoute><EventDetails /></ProtectedRoute>} />
      </Routes>
    </AuthContextProvider>
    </Fragment>
  );
}

export default App;
