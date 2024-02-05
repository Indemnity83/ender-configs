module.exports = {
    board_env: "STM32G0B1RE_btt",
    min_version: "2.1.2",
    meta: {
        stable_name: "ender_3_4.2.2-{{marlin_version}}-default-{{uid}}",
        nightly_name: "ender_3_4.2.2-{{current_date}}-default-{{uid}}"
    },
    based_on: {
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Creality/Ender-3 Pro/BigTreeTech SKR Mini E3 3.0/",
        stable_branch: "release-{{marlin_version}}",
        nightly_branch: "bugfix-2.1.x"
    },
    include: [
        "builds/features/bed-leveling.js",
        "builds/features/filament-change.js",
        "builds/features/input-shaping.js",
        "builds/features/octoprint.js",
        "builds/features/quality-of-life.js",    
    ],
    configuration: {
        enable: [
            ["STRING_CONFIG_H_AUTHOR", "u/minist3r, u/indemnity83"],
            ["CUSTOM_MACHINE_NAME", "Ender-3 Pro SKR E3 V3.0 w/ CRTouch"],
        ]
    }
};
