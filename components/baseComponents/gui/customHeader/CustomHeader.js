import React, {useState} from "react";
import CustomMenu from "../customMenu/CustomMenu";
import CustomHeaderLogo from "./CustomHeaderLogo";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./CustomHeader.module.scss";
import {AnimatePresence} from "framer-motion";
import PE from "@/components/baseComponents/gui/pElement/PElement";
import {settingsAnimationSwitch} from "@/components/baseComponents/helpers/transition/animations";

export default function CustomHeader({menuList, children, button}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className={classNames(styles.customHeader)}>
      <div className={styles.customHeader__block}>
        <CustomHeaderLogo />
        <AnimatePresence mode={"wait"}>
          {menuList && isActive && <CustomMenu {...menuList} show={isActive} onClick={() => setIsActive(!isActive)} />}
        </AnimatePresence>

        <div className={styles.customHeader__burger} onClick={() => setIsActive(!isActive)}>
          <PE.p
            animation={"siteBurgerTop"}
            animate={isActive ? "show" : "hide"}
            transition={{
              duration: 0.3,
            }}
            settingsAnimationStates={settingsAnimationSwitch}
          />
          <PE.p
            animation={"siteBurgerMiddle"}
            animate={isActive ? "show" : "hide"}
            transition={{
              duration: 0.3,
            }}
            settingsAnimationStates={settingsAnimationSwitch}
          />
          <PE.p
            animation={"siteBurgerBottom"}
            animate={isActive ? "show" : "hide"}
            transition={{
              duration: 0.3,
            }}
            settingsAnimationStates={settingsAnimationSwitch}
          />
        </div>
        {children}
      </div>
    </header>
  );
}

CustomHeader.propTypes = {
  menuList: PropTypes.object,
};
