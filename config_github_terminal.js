// The root filesystem location
//export const diskImageUrl = IMAGE_URL;
export const diskImageUrl = "wss://disks.webvm.io/alpine_20251007.ext2";
// The root filesystem backend type
//export const diskImageType = "github";
export const diskImageType = "cloud";
// Print an introduction message about the technology
export const printIntro = true;
// Is a graphical display needed
export const needsDisplay = true;
// Executable full path (Required)
//export const cmd = CMD; // Default: "/bin/bash";
export const cmd = "/sbin/init";
// Arguments, as an array (Required)
export const args = ARGS; // Default: ["--login"];
// Optional extra parameters
export const opts = {
	// Environment variables
	env: ENV, // Default: ["HOME=/home/user", "TERM=xterm", "USER=user", "SHELL=/bin/bash", "EDITOR=vim", "LANG=en_US.UTF-8", "LC_ALL=C"],
	// Current working directory
	cwd: CWD, // Default: "/home/user",
	// User id
	uid: 0,
	// Group id
	gid: 0
};
