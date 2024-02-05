module.exports = {
    partial: true,
    configuration: {
        enable: [
            // Enabled UBL and the associated LCD menues
            "AUTO_BED_LEVELING_UBL",
            "UBL_MESH_WIZARD",
            "LCD_BED_LEVELING",
            "MESH_EDIT_MENU",

            // Enable bed tramming LCD menu too
            "LCD_BED_TRAMMING",
        ]
    },
    configuration_adv: {
        enable: [
            // Enable the bed tramming wizard
            "ASSISTED_TRAMMING",
        ]
    }
};