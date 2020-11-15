import React from "react";
import EmailAuthTemplate from "../../../templates/signup/EmailAuth";
import InfoTemplate from "../../../templates/signup/Info";
import AddInfoTemplate from "../../../templates/signup/AddInfo";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function SignupPage() {

  const pageState = atom({
    key: 'pageState', // unique ID (with respect to other atoms/selectors)
    default: 'EmailAuth', // default value (aka initial value)
  });


  return (
    <>
      <RecoilRoot>
        <EmailAuthTemplate />
      </RecoilRoot>
    </>
  );
}

export default SignupPage;
