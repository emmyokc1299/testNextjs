


export default function VideoComponent() {
    const roomID = "123456";
  
    const userID = "randomID(5)";
    const userName = `Okechukwu Chinedu`;
  
    let myMeeting = async (element) => {
      // generate Kit Token
      let appID = Number(process.env.NEXT_PUBLIC_REACT_ZEGO_APPID);
      let serverSecret = process.env.NEXT_PUBLIC_REACT_ZEGO_SERVERID;
  
      console.log("ZegoUIKitPrebuilt===>", ZegoUIKitPrebuilt);
  
      const kitToken = ZegoUIKitPrebuilt?.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        userID,
        userName
      );
  
      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt?.create(kitToken);
      // start the call
      await zp?.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: "Personal link",
            url:
              window.location.protocol +
              "//" +
              window.location.host +
              window.location.pathname +
              "?roomID=" +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt?.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });
    };
  
    if (typeof window == "object") {
      return (
        <div
          className="myCallContainer"
          ref={myMeeting}
          style={{ width: "100%", height: "1000px" }}
        ></div>
      );
    } else return <div></div>;
  }