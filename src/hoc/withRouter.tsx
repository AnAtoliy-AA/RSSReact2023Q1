import { ComponentType } from 'react';
import { useLocation, Location } from 'react-router-dom';

export interface RouterProps {
  location: Location;
}

// TODO remove it after using hooks in components
// hooks here used according to Q&A for this task
// https://docs.google.com/spreadsheets/d/15FI4qtxQI3P43ZK-fHoE2BVMReToTWIB78Y7Of81GOA/edit#gid=143554468
export function withRouter(Component: ComponentType<RouterProps>) {
  return function useF() {
    const location = useLocation();

    return <Component location={location} />;
  };
}
