const [onesignalId, setOnesignalId] = useState();

function receivedPush(notification) {
  // Alert.alert('Mostrar', `Recebido ${JSON.stringify(notification)}`);
}
function openedPush(openResult) {
  // Alert.alert('Mostrar', `Aberto ${JSON.stringify(openResult)}`);
}
function idsPush(push) {
  // Alert.alert('Mostrar', `IDS${JSON.stringify(push)}`);
}
useEffect(() => {
  OneSignal.init('f5b5d57c-f68c-4802-9e35-b04559addd16', {
    kOSSettingsKeyAutoPrompt: true,
  });
  OneSignal.addEventListener('received', receivedPush);
  OneSignal.addEventListener('opened', openedPush);
  OneSignal.addEventListener('ids', idsPush);

  // OneSignal.setExternalUserId(user.id);

  // Sending multiple tags
  // OneSignal.sendTags({ type_user: user.perfil, click: '1' });

  // Getting the tags from the server and use the received object
  // OneSignal.getTags(receivedTags => {
  // Alert.alert(receivedTags);
  // });
  OneSignal.getPermissionSubscriptionState(status => {
    const userID = status.userId;
    setOnesignalId(userID);
  });
}, []);
