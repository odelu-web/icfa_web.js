import { useEffect } from "react";

const useVisitorLogger = () => {
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const reqUrl = window.location.href;
    const refUrl = document.referrer;

    const utm_source = queryParams.get("utm_source") || "";
    const utm_medium = queryParams.get("utm_medium") || "";
    const utm_campaign = queryParams.get("utm_campaign") || "";
    const utm_id = queryParams.get("utm_id") || "";
    const utm_term = queryParams.get("utm_term") || "";
    const utm_content = queryParams.get("utm_content") || "";
    const gclid = queryParams.get("gclid") || "";

    const logUrl = `insertVisitorLog.asp?utm_source1=${utm_source}&utm_medium1=${utm_medium}&utm_campaign1=${utm_campaign}&utm_id1=${utm_id}&utm_term1=${utm_term}&utm_content1=${utm_content}&gclid1=${gclid}&requrl=${encodeURIComponent(
      reqUrl
    )}&refURL=${encodeURIComponent(refUrl)}`;

    fetch(logUrl, { method: "GET" }).catch((error) =>
      console.error("Visitor log failed:", error)
    );
  }, []);
};

export default useVisitorLogger;
