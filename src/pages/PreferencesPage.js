import Preferences from '../components_refactored/Preferences/Preferences';
import PageHOC from "./PageHOC";

const PreferencesPage = () => {
    return (
        <PageHOC id="preferences-page" name="Preferences" component={<Preferences />} />
    )
}
export default PreferencesPage

