import GadgetsSummary from "./GadgetsSummary";
import AvailableGadgets from "./AvailableGadgets";
import { Fragment } from "react";

const Gadgets = () => {
  return (
    <Fragment>
      <GadgetsSummary />
      <AvailableGadgets />
    </Fragment>
  );
};
export default Gadgets;
