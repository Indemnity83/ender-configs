module.exports = {
    partial: true,
    configuration: {
        enable: [
            // Setup dimensions for sprite unit
            ["DEFAULT_AXIS_STEPS_PER_UNIT", [80, 80, 400, 424.9]],
            ["NOZZLE_TO_PROBE_OFFSET", [-31.94, -40.66, -2.92]],

            // Enable Z probing with BLTouch
            "USE_PROBE_FOR_Z_HOMING",
            "BLTOUCH",
            "Z_SAFE_HOMING",
        ]
    },
    configuration_adv: {
        enable: [
            // Configure BLtouch it with software mode due to some unknown 
            // issue with the sprite daughter board and stock mainboards
            "BLTOUCH_FORCE_SW_MODE",
            ["BLTOUCH_HS_MODE", true],

            // Disable endstop interrupts, again to handle software based
            // BLTouch sensor
            "ENDSTOP_INTERRUPTS_FEATURE",

            // Turn on a wizard to update nozzle to probe offsets if desired
            "PROBE_OFFSET_WIZARD",

            // Configure the filament change lengths for the direct drive
            ["FILAMENT_CHANGE_UNLOAD_LENGTH", 60],
            ["FILAMENT_CHANGE_FAST_LOAD_LENGTH", 40],
        ]
    }
};