'use strict';

/**
 * Функция, применяющая преобразование ко всем значениям объекта
 * @param {Object} obj - объект для преобразования
 * @param {Function} transformFn - функция преобразования
 *
 * @example
 * // returns { a: 2, b: { c: 6 } }
 * transform({ a: 1, b: { c: 3 } }, value => value * 2);
 *
 * @returns {Object}
 */
const transform = (obj, transformFn) => {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('obj должен быть объектом');
    }

    if (typeof transformFn !== 'function') {
        throw new TypeError('transformFn должен быть функцией');
    }

    const result = Array.isArray(obj) ? [] : {};

    for (const [key, value] of Object.entries(obj)) {
        result[key] = typeof value === 'object' && value !== null
            ? transform(value, transformFn)
            : transformFn(value);
    }

    return result;
};
