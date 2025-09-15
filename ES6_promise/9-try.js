export default function guardrail(mathFunction) {
    const queue = [];

    try {
        const math_f = mathFunction();
        queue.push(math_f)
    } catch (error) {
        queue.push(error.toString())
    } finally {
        queue.push('Guardrail was processed')
    }
    
    return queue;
}
