module.exports = {
    partial: true,
    configuration: {
        enable: [
            // Enable the Nozzle Park Feature which is required by the
            // Advanced Pause Feature below
            "NOZZLE_PARK_FEATURE",
            ["NOZZLE_PARK_POINT", ["(X_MAX_POS - 5)", "(Y_MIN_POS + 5)", 20]]   // Front right corner of bed
        ]
    },
    configuration_adv: {
        enable: [
            
            /*
             | -----------------------------------------------------------------------------
             | Configure The Filament Change (M600) funciton
             | -----------------------------------------------------------------------------
             | 
             | This adds the G-code M600 Filament Change function and configures the feat
             | to allow fillament changes by g-code or from the LCD interface. Entails
             | parking the nozzle and defining the extruder load and unload lengths.
             */
            "ADVANCED_PAUSE_FEATURE",
            "HOME_BEFORE_FILAMENT_CHANGE",
            "PARK_HEAD_ON_PAUSE",
            ["FILAMENT_CHANGE_UNLOAD_LENGTH", 60],
            ["FILAMENT_CHANGE_FAST_LOAD_LENGTH", 40],

            // Enable host interactions for filament changes (and probably other features)
            "HOST_ACTION_COMMANDS",
            "HOST_PROMPT_SUPPORT"
        ]
    }
};
