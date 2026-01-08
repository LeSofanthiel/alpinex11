// The root filesystem location
export const diskImageUrl = "wss://disks.webvm.io/alpine_20251007.ext2";
// The root filesystem backend type
export const diskImageType = "cloud";
// Print an introduction message about the technology
export const printIntro = false;
// Is a graphical display needed
export const needsDisplay = true;
// Executable full path (Required)
export const cmd = CMD;
// Arguments, as an array (Required)
export const args = [];
// Optional extra parameters
export const opts = {
	env: ["HOME=/home/user", "TERM=xterm-256color", "USER=user", "SHELL=/bin/bash", "EDITOR=nano", "LANG=en_US.UTF-8", "LC_ALL=C"],
	// Current working directory
	cwd: "/home/user",
	// User id
	uid: 1000,
	// Group id
	gid: 0
};
