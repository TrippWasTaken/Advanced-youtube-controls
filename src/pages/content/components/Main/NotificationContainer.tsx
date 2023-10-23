import React, { forwardRef, useImperativeHandle, useState } from 'react';

const NotificationContainer = (_, ref) => {
  const [showNotif, setShowNotif] = useState<boolean>(false);
  const [notif, setNotif] = useState([]);

  useImperativeHandle(ref, () => ({
    notifState: showNotif,
    changeNotifState: (e: boolean) => setShowNotif(e),
    setNotif: (e: Array<string | number>) => setNotif(e)
  }));

  return (
    <div
      className={`notif-container absolute font-bold z-10 p-11 text-6xl flex min-w-full justify-center ${
        showNotif ? 'show-notif' : 'hide-notif'
      }`}
    >
      {notif[0] && (
        <span>
          {notif[0]}: {notif[1]}
          {
            {
              volume: '%',
              speed: 'x'
            }[notif[0]]
          }
        </span>
      )}
    </div>
  );
};

export default forwardRef(NotificationContainer);
