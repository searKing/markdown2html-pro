import { Markdown2HtmlPro } from '../src/markdown2htmlPro';
const taskList: string = `#### GFM task list
- [x] GFM task list 1
- [x] GFM task list 2
- [ ] GFM task list 3
    - [ ] GFM task list 3-1
    - [ ] GFM task list 3-2
    - [ ] GFM task list 3-3
- [ ] GFM task list 4
    - [ ] GFM task list 4-1
    - [ ] GFM task list 4-2`;
const taskListExpect: string = `<h4 id="gfm-task-list">GFM task list</h4>
<ul class="contains-task-list">
<li class="task-list-item enabled"><label><input class="task-list-item-checkbox" checked=""type="checkbox"> GFM task list 1</label></li>
<li class="task-list-item enabled"><label><input class="task-list-item-checkbox" checked=""type="checkbox"> GFM task list 2</label></li>
<li class="task-list-item enabled"><label><input class="task-list-item-checkbox"type="checkbox"> GFM task list 3</label>
<ul class="contains-task-list">
<li class="task-list-item enabled"><label><input class="task-list-item-checkbox"type="checkbox"> GFM task list 3-1</label></li>
<li class="task-list-item enabled"><label><input class="task-list-item-checkbox"type="checkbox"> GFM task list 3-2</label></li>
<li class="task-list-item enabled"><label><input class="task-list-item-checkbox"type="checkbox"> GFM task list 3-3</label></li>
</ul>
</li>
<li class="task-list-item enabled"><label><input class="task-list-item-checkbox"type="checkbox"> GFM task list 4</label>
<ul class="contains-task-list">
<li class="task-list-item enabled"><label><input class="task-list-item-checkbox"type="checkbox"> GFM task list 4-1</label></li>
<li class="task-list-item enabled"><label><input class="task-list-item-checkbox"type="checkbox"> GFM task list 4-2</label></li>
</ul>
</li>
</ul>
`;

test('Should greet with message', async () => {
  const markdown2htmlPro = new Markdown2HtmlPro();
  const taskListActual: string = await markdown2htmlPro.markdown2html(taskList);
  // console.log('taskListActual= ', taskListActual);
  // console.log('taskListExpect= ', taskListExpect);
  expect(taskListActual).toBe(taskListExpect);
});

test('Should have Markdown2HtmlPro available', () => {
  expect(Markdown2HtmlPro).toBeTruthy();
});
