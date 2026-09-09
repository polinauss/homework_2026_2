'use strict';

/**
 * Функция, применяющая преобразование ко всем значениям объекта
 * @param {*} obj - объект, массив или значение
 * @param {Function} transformFn - функция преобразования
 *
 * @example
 * // returns { a: 2, b: { c: 6 } }
 * transform({ a: 1, b: { c: 3 } }, value => value * 2);
 *
 * @returns {*}
 */
const transform = (obj, transformFn) => {
    if (Array.isArray(obj)) {
        return obj.map(item => transform(item, transformFn));
    }

    if (obj !== null && typeof obj === 'object') {
        return Object.fromEntries(
            Object.entries(obj).map(([key, value]) => [key, transform(value, transformFn)])
        );
    }

    return transformFn(obj);
};
