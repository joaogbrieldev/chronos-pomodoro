import { PlayCircleIcon } from 'lucide-react';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/task-context/useTaskContext';
import type { TaskModel } from '../../models/taskModel';
import { Cycles } from '../cycles';
import { DefaultButton } from '../defaultButton';
import { DefaultInput } from '../defaultInput';

export function MainForm() {
  const { setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!taskNameInput.current?.value) return;
    const taskName = taskNameInput.current.value.trim();
    const newTask: TaskModel = {
      id: crypto.randomUUID(),
      name: taskName,
      duration: 1,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      type: 'workTime',
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prev => ({
      ...prev,
      activeTask: newTask,
      currentCycle: 1,
      secondsRemaining,
      formattedSecondsRemaining: '00:00',
      tasks: [...prev.tasks, newTask],
    }));
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          label='task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
          ref={taskNameInput}
        />
      </div>
      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='formRow'>
        <Cycles />
      </div>
      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />}>Enviar</DefaultButton>
      </div>
    </form>
  );
}
