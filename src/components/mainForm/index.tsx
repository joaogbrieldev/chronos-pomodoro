import { PlayCircleIcon } from 'lucide-react';
import { useRef } from 'react';
import { Cycles } from '../cycles';
import { DefaultButton } from '../defaultButton';
import { DefaultInput } from '../defaultInput';

export function MainForm() {
  const taskNameInput = useRef<HTMLInputElement>(null);
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
