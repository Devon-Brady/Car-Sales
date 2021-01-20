import AddedFeature from "../components/AddedFeature";

export const ADD_ADDITIONAL_FEATURE = 'ADD_ADDITIONAL_FEATURE';

export const addAdditionalFeature = (featureID) => {
    return {
        type: ADD_ADDITIONAL_FEATURE,
        payload: featureID,
    };
};