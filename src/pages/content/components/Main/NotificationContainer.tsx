import React, { forwardRef, useImperativeHandle, useState } from 'react';

const NotificationContainer = (_, ref) => {
  const [showNotif, setShowNotif] = useState<boolean>(false);
  const [notif, setNotif] = useState([]);

  console.log(showNotif);
  useImperativeHandle(ref, () => ({
    notifState: showNotif,
    changeNotifState: (e) => setShowNotif(e),
    setNotif: (e) => setNotif(e)
  }));

  return (
    <div className={`notif-container absolute z-50 p-5 text-5xl ${showNotif ? 'show-notif' : 'hide-notif'}`}>
      {notif[0]}: {notif[1]}
    </div>
  );
};

export default forwardRef(NotificationContainer);
