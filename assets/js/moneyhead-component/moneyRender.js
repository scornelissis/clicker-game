function moneyRenderer(money){
    const $moneyHead = document.querySelector("#moneyhead");
    $moneyHead.insertAdjacentHTML("beforeend", `Money: ${money}`)
}

export {moneyRenderer}