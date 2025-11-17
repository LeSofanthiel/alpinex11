const color= "\x1b[1;35m";
const orange = "\x1b[38;5;202m";
const purple = "\x1b[38;5;141m";
const underline= "\x1b[94;4m";
const bold = "\x1b[1m"
const normal= "\x1b[0m";
export const introMessage = [
	"+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+",
	"| "+ orange +"AlpineX11"+ normal +"                                                                   |",
	"| A Virtual Linux environment running in the browser via WebAssembly.         |",
	"|                                                                             |",
	"| AlpineX11 is powered by the CheerpX virtualization engine, which enables    |",
	"| safe, sandboxed execution of x86 binaries, fully client-side.               |",
	"|                                                                             |",
	"| CheerpX includes an x86-to-WebAssembly JIT compiler, a virtual block-based  |",
	"| file system, and a Linux syscall emulator.                                  |",
	"|                                                                             |",
	"| Currently running: "+ orange +"Debian 13 No GUI [Bash]"+ normal +"                                  |",
	"+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+",
	"",
	"   Welcome to AlpineX11. We are currently working out several issues related to the X11 part.",
	"   Here are some things you can try while you are here:",
	"",
	"     python3 examples/python3/fibonacci.py ",
	"     gcc -o helloworld examples/c/helloworld.c && ./helloworld",
	"     nano examples/c/helloworld.c",
	"     curl --max-time 15 parrot.live  # requires networking",
	""
];
export const errorMessage = [
	color + "CheerpX could not start" + normal,
	"",
	"Check the DevTools console for more information",
	"",
	"CheerpX is expected to work with recent desktop versions of Chrome, Edge, Firefox and Safari",
	"",
	"Give it a try from a desktop version / another browser!",
	"",
	"CheerpX internal error message is:",
	""
];
export const unexpectedErrorMessage = [
	color + "AlpineX11 encountered an unexpected error" + normal,
	"",
	"Check the DevTools console for further information",
	"",
	"Please consider reporting a bug!",
	"",
	"CheerpX internal error message is:",
	""
];
