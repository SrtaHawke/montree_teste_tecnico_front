import { CHAT_STORAGE_KEY } from "../model/chat.constants";
import {
    ChatPreferences,
    DEFAULT_CHAT_PREFERENCES,
} from "../model/chat.preferences";
import { storage } from "../../../shared/utils/storage";

class PreferencesService {
    getPreferences(): ChatPreferences {
        return storage.get<ChatPreferences>(
            CHAT_STORAGE_KEY,
            DEFAULT_CHAT_PREFERENCES
        );
    }

    savePreferences(preferences: ChatPreferences): void {
        storage.set(CHAT_STORAGE_KEY, preferences);
    }

    updatePreferences(
        partialPreferences: Partial<ChatPreferences>
    ): ChatPreferences {
        const currentPreferences = this.getPreferences();

        const updatedPreferences: ChatPreferences = {
            ...currentPreferences,
            ...partialPreferences,
        };

        this.savePreferences(updatedPreferences);

        return updatedPreferences;
    }

    resetPreferences(): ChatPreferences {
        storage.remove(CHAT_STORAGE_KEY);
        return DEFAULT_CHAT_PREFERENCES;
    }
}

export const preferencesService = new PreferencesService();