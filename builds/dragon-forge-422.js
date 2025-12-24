module.exports = {
    board_env: "STM32F103RE_creality",
    min_version: "2.1.2",
    meta: {
        stable_name: "dragon_forge_4.2.2-{{marlin_version}}",
        nightly_name: "dragon_forge_4.2.2-nightly-{{current_date}}",
    },
    based_on: {
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Creality/Ender-3 Pro/CrealityV422/",
        stable_branch: "release-{{marlin_version}}",
        nightly_branch: "bugfix-2.1.x",
    },
    configuration: {
        enable: [
            /*
             |----------------------------------------------------------------------------
             | Machine Info
             |----------------------------------------------------------------------------
             |
             | Set the machine name and firmware author. The machine name is displayed in 
             | the LCD "ready" message and info menu and the author info of this build
             | printed to the host during boot and M115. All authors can be listed.
             |
             */

            ["STRING_CONFIG_H_AUTHOR", "u/indemnity83"],
            ["CUSTOM_MACHINE_NAME", "Ender-3 Pro Dragon Forge"],

            /*
             |----------------------------------------------------------------------------
             | Sprite Extruder
             |----------------------------------------------------------------------------
             | 
             | The distinguishing feature of the Dragon Forge edition is that we've added
             | the direct-drive Sprite extruder onto a printer that was made to have a
             | bowden tube. So here we make some changes to account for that change.
             */

            ["DEFAULT_AXIS_STEPS_PER_UNIT", [80, 80, 400, 424.9]],  // Override with M92
            ["DEFAULT_MAX_FEEDRATE", [500, 500, 5, 50]],            // Override with M203
            ["DEFAULT_MAX_ACCELERATION", [500, 500, 100, 2500]],    // Override with M201
            ["NOZZLE_TO_PROBE_OFFSET", [-31.5, -40.0, -2.07]],      // Override with M851
            ["DEFAULT_Kp", 16.62],
            ["DEFAULT_Ki", 1.33],
            ["DEFAULT_Kd", 51.85],

            /*
             |----------------------------------------------------------------------------
             | Z-axis Probe
             |----------------------------------------------------------------------------
             | 
             | The sprite extruder has a built-in CRTrouch z-axis probe which provides us
             | far better z-axis precision. We need to tell Marlin to enable the probe.
             | Use M48 to test the probe repeatablity, and adjust options as needed.
             |
             | NOTE: the breakout board on the sprite hotend DOES NOT WORK with the 
             | Ender 4.2.2 board, you'll need to run a traditional probe wire all the way
             | from the probe to the board to make this work. 
             */

            "BLTOUCH",
            "Z_SAFE_HOMING",
            "USE_PROBE_FOR_Z_HOMING",
            ["MULTIPLE_PROBING", 2],
            ["Z_PROBE_LOW_POINT", -4],
            ["Z_PROBE_OFFSET_RANGE_MIN", -20],
            ["Z_PROBE_OFFSET_RANGE_MAX", 20],

            "Z_MIN_PROBE_REPEATABILITY_TEST", // Enable the M48 repeatability test

            //"PROBING_HEATERS_OFF",           // Turn heaters off when probing
            //"PROBING_FANS_OFF",              // Turn fans off when probing
            //["DELAY_BEFORE_PROBING", 200],   // (ms) To prevent vibrations

            /*
             |----------------------------------------------------------------------------
             | Bed Leveling
             |----------------------------------------------------------------------------
             | 
             | Enable UBL, a comprehensive bed leveling system combining the features and 
             | benefits of other systems. UBL also includes integrated Mesh Generation
             | Mesh Validation and Mesh Editing systems. Enable LCD leveling menus.
             */

            "AUTO_BED_LEVELING_BILINEAR",
            "ENABLE_LEVELING_AFTER_G28",
            ["GRID_MAX_POINTS_X", 5],
            "LCD_BED_LEVELING",

            /*
             |----------------------------------------------------------------------------
             | Preheat Constants
             |----------------------------------------------------------------------------
             | 
             | Setup some preheat temperatures for the printer to use and show in the LCD
             | as options. These temperatures are set to be above the glass transition
             | point, but set a bit on the low end to prevent filament from ozzing.
             */

            ["PREHEAT_1_LABEL", "PLA"],
            ["PREHEAT_1_TEMP_HOTEND", 175],
            ["PREHEAT_1_TEMP_BED ", 60],
            ["PREHEAT_1_TEMP_CHAMBER", 35],
            ["PREHEAT_1_FAN_SPEED", 0],

            ["PREHEAT_2_LABEL", "ABS"],
            ["PREHEAT_2_TEMP_HOTEND", 200],
            ["PREHEAT_2_TEMP_BED ", 80],
            ["PREHEAT_2_TEMP_CHAMBER", 35],
            ["PREHEAT_2_FAN_SPEED", 0],

            /*
             |----------------------------------------------------------------------------
             | Nozzle Park
             |----------------------------------------------------------------------------
             | 
             | Enable the Nozzle Park feature, which is required by a few other options
             | throughout the Dragon Forge configuration. In particular this permits
             | the nozzle to be parked away from the print for a filament change.
             */

            "NOZZLE_PARK_FEATURE",

            /*
             |----------------------------------------------------------------------------
             | S-Curve Acceleration
             |----------------------------------------------------------------------------
             | This option eliminates vibration during printing by fitting a Bézier curve
             | to move acceleration, producing much smoother direction changes. Motors
             | and hence the entire machine more closely obey the physics of motion.
             */

            "S_CURVE_ACCELERATION",

            /*
             |----------------------------------------------------------------------------
             | Skew Correction
             |----------------------------------------------------------------------------
             | Bed Skew Compensation corrects for misalignment in the XY, XZ, and ZY axes
             | through the use of correction factors. Use M852 GCode to set a bed skew
             | compensation factor. Valid correction factors range between -1 and 1.
             */

            "SKEW_CORRECTION",

            /*
             |----------------------------------------------------------------------------
             | Bed Dimensions
             |----------------------------------------------------------------------------
             | Set the bed dimensions and min/max positions. This is important to ensure
             | that the printer knows where the bed is and how to move the nozzle. Be
             | aware the sprite extruder has very different offset from a default.
             */
            ["X_BED_SIZE", 220],
            ["X_MIN_POS", 12],
            ["X_MAX_POS", 244],

            ["Y_BED_SIZE", 220],
            ["Y_MIN_POS", 8],
            ["Y_MAX_POS", 228],
        ]
    },
    configuration_adv: {
        enable: [

            /*
             |----------------------------------------------------------------------------
             | Probe Margins
             |----------------------------------------------------------------------------
             | Because the probe is fairly significantly left and front of the nozzle, we
             | need to constrain the max X/Y position of the head to make sure that it
             | doesn't crash into other printer objets and break or damanage things.
             */
            ["PROBING_MARGIN_LEFT", 10],
            ["PROBING_MARGIN_FRONT", 10],
            ["PROBING_MARGIN_RIGHT", 22],
            ["PROBING_MARGIN_BACK", 35],

            /*
             |----------------------------------------------------------------------------
             | Bed Tramming
             |----------------------------------------------------------------------------
             | 
             | Add the G35 gcode command and LCD Tramming Wizard to read bed corners to 
             | help adjust screws. This should be run BEFORE running the unified bed
             | leveling system to ensure that the system is as close as possible.
             */

            "ASSISTED_TRAMMING",
            "ASSISTED_TRAMMING_WIZARD",
            ["TRAMMING_POINT_XY", q`{{20, 20}, {190, 20}, {190, 175}, {20, 175}}`],

            /*
             |----------------------------------------------------------------------------
             | Filament Change (M600)
             |----------------------------------------------------------------------------
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

            /*
             |----------------------------------------------------------------------------
             | Host Integration
             |----------------------------------------------------------------------------
             | 
             | Enable host actions commands and prompt support. These firmware options let
             | tools like Octoprint get messages from your printer like pause and stop,
             | as well as passing prompts to tools. Does nothing without Octoprint.
             */

            "HOST_ACTION_COMMANDS",
            "HOST_PROMPT_SUPPORT",
            "HOST_STATUS_NOTIFICATIONS",
        ],
    },
};
