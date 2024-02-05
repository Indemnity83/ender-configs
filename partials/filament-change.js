module.exports = {
    partial: true,
    configuration: {
        enable: [
            // Enable nozzle park, required for Advanced Pause
            "NOZZLE_PARK_FEATURE"
        ]
    },
    configuration_adv: {
        enable: [
            // Adds the G-code M600 Filament Change to initiate a filament change.
            "ADVANCED_PAUSE_FEATURE",

            // If needed, home before parking for filament change
            "HOME_BEFORE_FILAMENT_CHANGE",

            // Park the nozzle during pause and filament change.
            "PARK_HEAD_ON_PAUSE",
        ]
    }
};