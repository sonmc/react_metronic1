import React, { useMemo } from "react";
import objectPath from "object-path"; 
import { useHtmlClassService } from "../../_core/MetronicLayout"; 
import { UserNotificationsDropdown } from "../extras/dropdowns/UserNotificationsDropdown"; 
import { QuickUserToggler } from "../extras/QuiclUserToggler";

export function Topbar() {
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      viewSearchDisplay: objectPath.get(
        uiService.config,
        "extras.search.display"
      ),
      viewNotificationsDisplay: objectPath.get(
        uiService.config,
        "extras.notifications.display"
      ), 
      viewLanguagesDisplay: objectPath.get(
        uiService.config,
        "extras.languages.display"
      ),
      viewUserDisplay: objectPath.get(uiService.config, "extras.user.display"),
    };
  }, [uiService]);

  return (
    <div className="topbar"> 

      {layoutProps.viewNotificationsDisplay && <UserNotificationsDropdown />} 
 
      {layoutProps.viewUserDisplay && <QuickUserToggler />}
    </div>
  );
}
