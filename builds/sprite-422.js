module.exports = {
    board_env: "STM32F103RE_creality",
    min_version: "2.1.2",
    meta: {
        stable_name: "ender_3_4.2.2-{{marlin_version}}-default-{{uid}}",
        nightly_name: "ender_3_4.2.2-{{current_date}}-default-{{uid}}"
    },
    based_on: {
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Creality/Ender-3/CrealityV422/",
        stable_branch: "release-{{marlin_version}}",
        nightly_branch: "bugfix-2.1.x"
    },
    configuration: {
        enable: [
            ["STRING_CONFIG_H_AUTHOR", "u/minist3r, u/indemnity83"],
            ["CUSTOM_MACHINE_NAME", "Ender-3 Pro w/ CRTouch and Sprite"],

            ["DEFAULT_AXIS_STEPS_PER_UNIT", [80, 80, 400, 424.9]],

            "S_CURVE_ACCELERATION",
            "USE_PROBE_FOR_Z_HOMING",

            "BLTOUCH",
            ["NOZZLE_TO_PROBE_OFFSET", [-31.94, -40.66, -2.92]],
            "AUTO_BED_LEVELING_UBL",
            "UBL_MESH_WIZARD",
            "LCD_BED_LEVELING",
            "MESH_EDIT_MENU",
            "LCD_BED_TRAMMING",

            "Z_SAFE_HOMING",
            "NOZZLE_PARK_FEATURE",
        ],
        disable: [
            "ENDSTOP_INTERRUPTS_FEATURE",
            "CLASSIC_JERK"
        ]
    },
    configuration_adv: {
        enable: [
            "BLTOUCH_FORCE_SW_MODE",
            ["BLTOUCH_HS_MODE", true],
            "ASSISTED_TRAMMING",

            "INPUT_SHAPING_X",
            "INPUT_SHAPING_Y",

            "ADAPTIVE_STEP_SMOOTHING",
            "PROBE_OFFSET_WIZARD",
            "USE_BIG_EDIT_FONT",
            
            "LIN_ADVANCE",
            ["ADVANCE_K", 0.0],

            "ADVANCED_PAUSE_FEATURE",

            ["FILAMENT_CHANGE_UNLOAD_LENGTH", 60],
            ["FILAMENT_CHANGE_FAST_LOAD_LENGTH", 40],

            "PARK_HEAD_ON_PAUSE",
            "HOME_BEFORE_FILAMENT_CHANGE",
            
            //octoprint
            "HOST_ACTION_COMMANDS",
            "HOST_PAUSE_M76",
            "HOST_PROMPT_SUPPORT"
        ],
        disable: []
    }
};