const { configuration_adv } = require("./filament-change");

module.exports = {
    partial: true,
    configuration: {
        enable: [

            /*
             | -----------------------------------------------------------------------------
             | Configure the Sprite extruder
             | -----------------------------------------------------------------------------
             | 
             | The distinguishing feature of the Dragon Forge edition is that we've added
             | the direct-drive Sprite extruder onto a printer that was made to have a
             | bowden tube. So here we make some changes to account for that change.
             */

            ["DEFAULT_AXIS_STEPS_PER_UNIT", [80, 80, 400, 424.9]],      // Override with M92
            ["DEFAULT_MAX_FEEDRATE", [500, 500, 5, 50]],                // Override with M203
            ["DEFAULT_MAX_ACCELERATION", [500, 500, 100, 2500]],        // Override with M201
            ["NOZZLE_TO_PROBE_OFFSET", [-31.5, -40.0, -2.07]],
            
            /*
             | -----------------------------------------------------------------------------
             | Configure Z-axis probe using CRTouch
             | -----------------------------------------------------------------------------
             | 
             | The sprite extruder has a built-in CRTrouch z-axis probe which provides us
             | far better z-axis precision. We need to tell Marlin to enable the probe.
             | Use M48 to test the probe repeatablity, and adjust options as needed.
             */
            
            "BLTOUCH",                         // Enable the BLTOUCH (CRTouch) probe 
            "Z_SAFE_HOMING",                   // Ensure that X and Y are known before homing Z
            "USE_PROBE_FOR_Z_HOMING",          // Use the probe for homing Z

            "Z_MIN_PROBE_REPEATABILITY_TEST",  // Enable the M48 repeatability test to test probe accuracy

            //"PROBING_HEATERS_OFF",           // Turn heaters off when probing
            //"PROBING_FANS_OFF",              // Turn fans off when probing
            //["DELAY_BEFORE_PROBING", 200],   // (ms) To prevent vibrations from triggering piezo sensors

            /*
             | -----------------------------------------------------------------------------
             | Enable Unified Bed Leveling
             | -----------------------------------------------------------------------------
             | 
             | Enable UBL, a comprehensive bed leveling system combining the features and 
             | benefits of other systems. UBL also includes integrated Mesh Generation
             | Mesh Validation and Mesh Editing systems. Enable LCD leveling menus.
             */

            "AUTO_BED_LEVELING_UBL",
            "LCD_BED_LEVELING"

        ]
    },
    configuration_adv: {
        enable: [

            /*
             | -----------------------------------------------------------------------------
             | Enable Bed Tramming
             | -----------------------------------------------------------------------------
             | 
             | Add the G35 gcode command and LCD Tramming Wizard to read bed corners to 
             | help adjust screws. This should be run BEFORE running the unified bed
             | leveling system to ensure that the system is as close as possible.
             */
            "ASSISTED_TRAMMING",
            "ASSISTED_TRAMMING_WIZARD"
            ["TRAMMING_POINT_XY",  [[ 20, 20 ], [ 180,  20 ], [ 180, 180 ], [ 20, 180 ] ]]
            
        ]
    }
};
