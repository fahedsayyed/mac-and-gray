import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "../components/Reusable/Routes/PageNotFound";

import PrivateRoute from "../components/Reusable/Routes/PrivateRoute";
import PrivatePublicRoute from "../components/Reusable/Routes/PrivatePublicRoute";
import {
  Signup,
  Login,
  ForgotPassword,
  ResetPassword,
  Settings,
  Logout,
  Overview,
  AccountMetrics,
  Support,
  CreateSupportCase,
  Payments,
  EvaluationPayment,
  PaymentHistory,
  PaymentSuccess,
  PaymentCancelled,
  FundingEvaluation,
  SupportDetails,
} from "../pages";
import DownloadMT5 from "../pages/Downloads/DownloadMT5";
import Competitions from "../pages/Competitions";
import PublicFundingEvaluation from "../pages/Payments/PublicFundingEvaluation";
import PublicEvaluationPayment from "../pages/Payments/PublicEvaluationPayment";
import CompetitionLeaderboard from "../pages/Competitions/CompetitionLeaderboard";
import CompetitionList from "../pages/Competitions/CompetitonList";

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PrivateRoute />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="/signup/:referalcode" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/download/mt5" element={<DownloadMT5 />} />
        {/* <Route exact path="/reset-password" element={<ResetPassword />} /> */}

        {/* PROTECTED ROUTES */}
        <Route element={<PrivateRoute />}>
          <Route path="/overview" element={<Overview />} />
          <Route
            path="/accountmetrics/:login"
            title={"account-metrics"}
            element={<AccountMetrics />}
          />
          <Route path="/accountmetrics" element={<AccountMetrics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/support" element={<Support />} />
          <Route path="/support/:id" element={<SupportDetails />} />
          <Route path="/support/create" element={<CreateSupportCase />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route
            path="/competitions-leaderboard"
            element={<CompetitionLeaderboard />}
          />
          <Route path="/competitions-details" element={<CompetitionList />} />

          <Route path="/payments" element={<Payments />}>
            <Route path="funding-evaluation" element={<FundingEvaluation />} />
            <Route
              path="funding-evaluation/checkout/:id"
              element={<EvaluationPayment />}
            />
            <Route path="history" element={<PaymentHistory />} />
            <Route path="status/success" element={<PaymentSuccess />} />
            <Route path="status/cancelled" element={<PaymentCancelled />} />
          </Route>

          <Route path="*" exact={true} element={<PageNotFound />} />
        </Route>

        {/* PRIVATE PUBLIC ROUTES */}
        <Route
          path="/funding-evaluation"
          element={<PublicFundingEvaluation />}
        />
        <Route
          path="funding-evaluation/checkout/:id"
          element={<PublicEvaluationPayment />}
        />
      </Routes>
    </BrowserRouter>
  );
}
