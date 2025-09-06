process.stdin.setEncoding("utf-8");

process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on("data", (input) => {
    const name = input.trim();
    process.stdout.write(`Your name is: ${name}\n`);
    process.exit();
});
process.on("exit", () => {
    process.stdout.write("This important software is now closing\n");
});