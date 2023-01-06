import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';

export const Main = () => {
    const [valorInput, setValorInput] = useState('0,00');
    const [floatValue, setFloatValue] = useState(0);

    const handleInputChange = (event) => {
        const input = event.target;
        const { value } = input;

        let numberValue = value
            .replace(/^[\D0]+|\D/g, '') // remove todos os zeros do início e caracteres que não sejam números
            .padStart(3, '0');

        if (+numberValue > 999_999_999_99)
            numberValue = '99999999999';

        const digits = numberValue.slice(0, -2);
        const decimals = numberValue.slice(-2);

        const formattedDigits = digits.replace(/\d(?=(\d{3})+$)/g, '$&.')
        setValorInput(`${formattedDigits},${decimals}`);
        setFloatValue(+`${digits}.${decimals}`)
    }

    useEffect(() => {
        if (valorInput.trim() === '')
            setValorInput('0')
    }, [valorInput])

    useEffect(() => console.log({floatValue, valorInput}), [floatValue, valorInput])

    return (
        <main className={styles.main}>
            <h1>Cadastre o valor de custo do seu produto!</h1>

            <fieldset>
                <span>R$</span>
                <input
                    type="text"
                    autoComplete="off"
                    inputMode="numeric"
                    name='valor'
                    value={valorInput}
                    onInput={(e) => handleInputChange(e)}
                    autoFocus
                />

                <button>+</button>
            </fieldset>
        </main>
    )
}
