import "./styles.css";

 const onClickAdd = () => {
     const inputText = document.getElementById("add-text").value;
     document.getElementById("add-text").value = "";
     
     // liタグ生成
     const li = document.createElement("li");
     
     // divタグ生成
     const div = document.createElement("div");
     div.className = "list-row";
     
     // pタグ生成
     const p = document.createElement("p");
     p.innerText = inputText;
     
     // 完了ボタン
     const completeButton = document.createElement("button");
     completeButton.innerText = "完了";
     completeButton.addEventListener("click", () => {
         // 押された完了ボタンの親タグ（div）を未完了リストから削除
         deleteFromIncompleteList(deleteButton.closest("li"));
         
         // 完了リストへ追加
         const addTarget = completeButton.parentNode;
         
         // TODO内容テキストを取得
         const text = addTarget.firstElementChild.innerText;
         
         // div以下を初期化
         addTarget.textContent = null;
         
         // liタグ生成
         const li = document.createElement("li");
     
         // pタグ生成
         const p = document.createElement("p");
         p.innerText = text;
         
         //　buttonタグ生成
         const backButton = document.createElement("button");
         backButton.innerText = "戻す";
         backButton.addEventListener("click", () => {
            // 押された戻すボタンを完了リストから削除
            const deleteTarget = backButton.parentNode;
            document.getElementById("complete-list").removeChild(deleteTarget);
         });
         
         // liタグの子要素に各要素を設定
         li.appendChild(addTarget);
         addTarget.appendChild(p);
         addTarget.appendChild(backButton);
         
         // 完了リストに追加
         document.getElementById("complete-list").appendChild(li);
     });
     
     // 削除ボタン
     const deleteButton = document.createElement("button");
     deleteButton.innerText = "削除";
     deleteButton.addEventListener("click", () => {
         // 押された削除ボタンの親タグ（div）を未完了リストから削除
         deleteFromIncompleteList(deleteButton.closest("li"));
     });
     
     li.appendChild(div);
     div.appendChild(p);
     div.appendChild(completeButton);
     div.appendChild(deleteButton);
     
     document.getElementById("incomplete-list").appendChild(li);
 };
 
 // 未完了リストから指定の要素を削除
 const deleteFromIncompleteList = (target) => {
     document.getElementById("incomplete-list").removeChild(target);
 }
 
 document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());