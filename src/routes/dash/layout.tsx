import { component$ } from "@builder.io/qwik";
import { Sidebar } from '../../components/Sidebar/index';
import { Navbar } from '../../components/Navbar/index';
import { Card } from '../../components/Card/index';
import { Table } from '../../components/Table/index';
import '../../components/css/styles.css';

export default component$(() => {
  return (
    <div class="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div class="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main Content Section */}
        <div class="flex-1 p-8">
          <div class="grid grid-cols-12 gap-4 w-full max-w-6xl mx-auto">
            
            {/* Primera fila (tres tarjetas iguales) */}
            <div class="col-span-4">
              <Card title="Card Title 1" description="I am a very simple card." links={['A LINK', 'A LINK']} />
            </div>
            <div class="col-span-4">
              <Card title="Card Title 2" description="I am a very simple card." links={['A LINK', 'A LINK']} />
            </div>
            <div class="col-span-4">
              <Card title="Card Title 3" description="I am a very simple card." links={['A LINK', 'A LINK']} />
            </div>

            {/* Segunda fila (tarjeta pequeña debajo de la primera y otra más ancha al lado) */}
            <div class="col-span-4">
              <Card title="Card Title 4" description="I am a very simple card." links={['A LINK', 'A LINK']} />
            </div>
            <div class="col-span-4 card">
              <Card title="Card Title 5" description="I am a very simple card." links={['A LINK', 'A LINK']} />
            </div>

            {/* Tercera fila: tarjeta más ancha que ocupa todo el ancho */}
            <div class="col-span-12">
              <Card title="Card Title with Table" description="This card contains a table." links={[]}>
                <Table />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});