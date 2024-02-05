module.exports = {
    partial: true,
    configuration_adv: {
        enable: [
            // Define host streamer action commands in compliance with the standard.
            "HOST_ACTION_COMMANDS",

            // Tell the host to pause in response to M76
            "HOST_PAUSE_M76",

            // Initiate host prompts to get user feedback
            "HOST_PROMPT_SUPPORT"
        ]
    }
};