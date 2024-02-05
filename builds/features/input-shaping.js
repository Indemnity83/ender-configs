module.exports = {
    partial: true,
    configuration: {
        enable: [
            // This option eliminates vibration during printing by fitting a Bézier
            // curve to move acceleration, producing much smoother direction changes.
            "S_CURVE_ACCELERATION"
        ],
        disable: [
            // Use Junction Deviation Factor instead of classic jerk.
            "CLASSIC_JERK" 
        ]
    },
    configuration_adv: {
        enable: [
            // Zero Vibration (ZV) Input Shaping for X and/or Y movements.
            "INPUT_SHAPING_X",
            "INPUT_SHAPING_Y",

            // Adaptive Step Smoothing increases the resolution of multi-axis moves, particularly at step frequencies
            // below 1kHz (for AVR) or 10kHz (for ARM), where aliasing between axes in multi-axis moves causes audible
            // vibration and surface artifacts. The algorithm adapts to provide the best possible step smoothing at the
            // lowest stepping frequencies.
            "ADAPTIVE_STEP_SMOOTHING",

            // Linear Pressure Control v1.5, K=0 means advance disabled.
            "LIN_ADVANCE",
            ["ADVANCE_K", 0.0]
        ]
    }
};
