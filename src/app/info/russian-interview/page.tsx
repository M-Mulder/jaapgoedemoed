import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Interview in Russian | Jaap Goedemoed',
  description: 'An interview in Russian with Jaap Goedemoed published on scripokiev.com, discussing his stock paper artworks and creative process.',
};

export default function RussianInterviewPage() {
  return (
    <div className="min-h-screen">
      {/* Header section */}
      <div className="bg-background py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/2019/01/Jaap-and-Alexander-27-June-2015-copy-693x1024.jpg')] bg-no-repeat bg-cover blur-xl"></div>
        </div>
        
        <div className="container-wide relative z-10">
          <h1 className="page-title text-center">Interview in Russian</h1>
          <p className="text-text-muted text-center max-w-2xl mx-auto">
            An interview from scripokiev.com about stock paper artworks
          </p>
        </div>
      </div>
      
      {/* Introduction Section */}
      <div className="bg-background-light py-16">
        <div className="container-narrow">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative aspect-[3/4] shadow-xl">
                <Image 
                  src="/2019/01/Jaap-and-Alexander-27-June-2015-copy-693x1024.jpg"
                  alt="Jaap Goedemoed and Alexander Kamyshin in Amsterdam, June 2015"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-sm text-text-muted mt-2 text-center">
                2015, Alexander Kamyshin during his visit in Amsterdam
              </p>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-serif mb-4 text-text-accent">The Story Behind the Interview</h2>
              
              <div className="space-y-4 text-text">
                <p>
                  For several years a fan of the stock paper artworks – living in or near Kiev – put an interview with the artist and some artworks on a website, at that time on URL www.scripokiev.com. The website was 'on air' from 31 January 2010 to somewhere in 2014. With 'scripo' is meant 'scripophily', i.e., the interest in collecting old documents like stock papers, bonds, bank notes, etc.
                </p>
                <p>
                  The artist came into contact with this art fan when he left a message on the artist's website with appreciating words. The name of the art fan was Alexander Kamyshin. By mail he forwarded questions to the artist, and with the artist's responses and some pictures of artworks sent by mail he composed an interview on the website of Scripophily.
                </p>
                <p>
                  By chance he visited in 2015 Amsterdam on a business trip. On the picture above it can be seen that Alexander visited the artist in his home. The interview in Russian language as it was present on the scripokiev website is given in the next article.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Interview Content */}
      <div className="container-narrow py-16">
        <div className="prose prose-invert mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-serif">Общество „Кіевскій СкрипофилЪ"</h2>
            <p className="italic">Старинные акціи и облигаціи</p>
            <p className="text-accent">Вторая Жизнь Старинных Ценных Бумаг — Жизнь в Искусстве</p>
          </div>
          
          <div className="mb-12">
            <p>
              Дорогие скрипофилы, как и обещали, публикуем интервью с человеком, связанным со скрипофилией. В нашем фокусе — человек от искусства, чьей музой и полотном стали старинные ценные бумаги. Если вы дадите ему акцию или облигацию, он изменит ее до неузнаваемости, в то же время оставив оригинальной и прекрасной. Этот человек — художник в теле медика — Джаап Годемод (Jaap Goedemoed), Амстердам, Нидерланды.
            </p>
          </div>
          
          <div className="mb-12">
            <div className="relative aspect-[4/3] shadow-xl mb-4">
              <Image 
                src="/2019/01/Rusiesch-txtno1.jpg"
                alt="Russian interview text"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 75vw"
              />
            </div>
          </div>
          
          <div className="mb-8">
            <p className="font-medium text-accent">
              — Джаап, расскажите, пожалуйста, нашим скрипофилам о том, что именно Вы делаете с ценными бумагами, про Ваш стиль.
            </p>
            
            <p>
              — Я начал заниматься живописью в начале 80-х годов. Сначала я писал маслом, потом акрилом, и все время экспериментировал с основой — использовал льняне ленты и пасту для моделирования. В 90-х годах я перешел к абстракционизму, во всех моих работах есть сильный акцент на деталях, я стараюсь добиться того, чтобы на работы было интересно смотреть издалека как на структуры, геометрические формы; и вблизи — детали тоже очень важны.
            </p>
            
            <p>
              Сейчас я использую как акрил, так и гуммиарабик (этой технике меня обучил мой друг, художник из Амстердама Франк Лодизен (Frank Lodeizen). Основа моих работ — открытые и закрытые структуры, состоящие из множества элементов, выполненных из фрагментов газет, старинных банкнот, старинных тосканских налоговых чеков, японских оттисков, оригинальных рукописных исламских текстов, старинных ценных бумаг наконец:)
            </p>
          </div>
          
          <div className="mb-8">
            <p className="font-medium text-accent">
              — А когда к Вам пришла идея использовать старинные акции и облигации в своих работах и какие именно ценные бумаги представляют для Вас интерес?
            </p>
            
            <p>
              — В 1994 г. я провел отпуск в Тоскании, в маленьком селении под названием Монтескудайо (Montescudaio) вместе со своим другом, Франком Лодизеном (Frank Lodeizen). Я нашел на заднем дворе дома, где мы жили, старинные налоговые бумаги времен Муссолини (1919-1944 гг.). На моем вебсайте Вы можете увидеть множество работ, в основу которых легли эти бумаги. Так родилась идея использовать старинные бумаги в моем творчестве. Кстати, с тех пор я часто отдыхаю со своей семьей на вилле в Монтескудайо (Montescudaio), люблю это место.
            </p>
          </div>
          
          <div className="mb-12">
            <div className="relative aspect-[3/4] shadow-xl mb-4">
              <Image 
                src="/2021/04/Chemin-de-Fer-Lung-Tsing-U-Hai-2005-40-x-50-cm-768x953.jpg"
                alt="Chemin de Fer Lung-Tsing-U-Hai 2005, 40 x 50 cm"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 75vw"
              />
            </div>
            <p className="text-sm text-text-muted text-center">
              Chemin de Fer Lung-Tsing-U-Hai 2005, 40 x 50 cm
            </p>
          </div>
          
          <div className="mb-8">
            <p>
              Затем чисто случайно я увидел в антикварной лавке в Амстердаме старинные ценные бумаги периода 1890-1930 гг. Меня особенно привлекают бумаги городов таких как Одесса, Киев, Днепропетровск, Саратов, Грозный, Екатеринослав, Донецк, Санкт-Петербург и т.д. Трамвай Екатеринослава – какое великолепное название!
            </p>
          </div>
          
          <div className="mb-8">
            <p className="font-medium text-accent">
              — Вы сделали целую выставку работ под названием «Tramways d'Odessa». Расскажите нам подробнее об этой выставке.
            </p>
          </div>
          
          <div className="mb-12">
            <div className="relative aspect-[3/4] shadow-xl mb-4">
              <Image 
                src="/2019/01/Tramways-dOdessa-posterA4-722x1024.jpg"
                alt="Tramways d'Odessa exhibition poster"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 75vw"
              />
            </div>
            <p className="text-sm text-text-muted text-center">
              Tramways d'Odessa exhibition poster
            </p>
          </div>
          
          <div className="mb-8">
            <p>
              — Конечно, с удовольствием расскажу. Выставка «Tramways d'Odessa» проходила в амстердамской галерее Руимте (Galerie Ruimte) с 27 Апреля по 18 Мая 2008 г. В основу выставки легли работы, выполненные с ценными бумагами времен 1880—1930 гг. Я декорировал бумаги новыми символами, в том числе и этническими, старался придать им новый образ, вдохнуть вторую жизнь, так сказать:)
            </p>
            
            <p>
              Было выставлено 52 работы и 4 постера, в том числе 11 работ с ценными бумагами, которые я сделал в период 2005-2008 гг., а также мои предыдущие работы, начиная с 1990 г. Работы были оценены от 750 до 1750 евро, в зависимости от сложности и количества деталей.
            </p>
            
            <p>
              Я очень люблю работать с большим форматом, отдельные элементы выполнены акрилом и гуммиарабикой, шелкотрафаретной печатью на канве, ценных бумагах и документах, дереве, стеклянных бутылках, как бы приглашая зрителя подойти ближе.
            </p>
          </div>
          
          <div className="mb-8">
            <p className="font-medium text-accent">
              — Джаап, признайтесь, Вам хотелось побывать в Украине и России, родине Вашего вдохновения?
            </p>
            
            <p>
              — Конечно! На самом деле я был в Украине в 1992 г. был в Одессе, Крыму, Киев, к сожалению не успел посмотреть. Затем я отправился в Москву и Санкт-Петербург. Многое, наверное, поменялось с тех пор…
              Эти страны интересны мне и с точки зрения рынка продажи моих работ.
            </p>
          </div>
          
          <div className="mb-12">
            <div className="relative aspect-[4/3] shadow-xl mb-4">
              <Image 
                src="/2019/01/Rusiesch-txt1-1.jpg"
                alt="Russian interview text"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 75vw"
              />
            </div>
          </div>
          
          <div className="mb-8">
            <p>
              Однако пока это скорее планы, чем реальность.
            </p>
          </div>
          
          <div className="mb-8">
            <p className="font-medium text-accent">
              — Да, наша страна сильно пострадала от финансового кризиса и людям необходимо время для того, чтобы возобновить платежеспособность. Джаап, расскажите о Ваших планах на будущее.
            </p>
            
            <p>
              — Больше работать. Пока мне не удается посвящать достаточно времени моему искусству. Я работаю фармацевтом в RIVM (Dutch Institute for Public Health and the Environment) и разрываюсь между ежедневной работой и работой для души.
              Искусство — ключевое в моей жизни. Верю, в конце концов мало что останется от моих фармацевтических отчетов, исследований и патентов. А полотна останутся.
            </p>
          </div>
          
          <div className="mb-8 opacity-70 italic">
            <p>
              Беседу вел Александр Камышин специально для Общества „Кіевскій СкрипофилЪ".
            </p>
          </div>
          
          <div className="mb-12">
            <div className="relative aspect-[3/4] shadow-xl mb-4">
              <Image 
                src="/2021/04/Fabrication-des-Bouteilles-a-Odessa-I-2005-40-x-50-cm-768x959.jpg"
                alt="Fabrication des Bouteilles à Odessa I 2005, 40 x 50 cm"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 75vw"
              />
            </div>
            <p className="text-sm text-text-muted text-center">
              Fabrication des Bouteilles à Odessa I 2005, 40 x 50 cm
            </p>
          </div>
          
          <div className="mt-12 text-sm text-text-muted">
            <p>
              Posted in Трамвай, Интервью, Одесса<br/>
              January 31st, 2010<br/>
              Читайте также:<br/>
              Севастопольский Трамвай — История Глазами Скрипофила<br/>
              Киевский Трамвай — Финансовая Сторона Истории
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
