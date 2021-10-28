// Import my own tools.js
const tools = require('./tools');

(() => {
  // Define data needed in the project.
  const projectsData = [
    {
      titel: 'Virtuele Campus',
      synopsis: 'Eindopdracht: Arteveldehogeschool Campus Mariakerke in een virtuele, driedimensionale wereld. Alle 3D-assets zijn zelf gemodelleerd.',
      thumbnailUrl: 'https://dl.airtable.com/.attachments/adf3431d24498da1d75b548422ce9669/75f0f611/mixed-reality-2018-2019_Virtuele-Campus_01.png',
      assets: [
        {
          title: 'Virtuele Campus - Image 001',
          type: 1,
          sourceUrl: 'https://dl.airtable.com/.attachments/adf3431d24498da1d75b548422ce9669/75f0f611/mixed-reality-2018-2019_Virtuele-Campus_01.png'
        },
        {
          title: 'Virtuele Campus - Image 002',
          type: 1,
          sourceUrl: 'https://dl.airtable.com/.attachments/b88a6d82184634f19caec2f51434a7d5/d97ee3f8/mixed-reality-2018-2019_Virtuele-Campus_02.png'
        },
        {
          title: 'Virtuele Campus - Image 003',
          type: 1,
          sourceUrl: 'https://dl.airtable.com/.attachments/286d1a48fb0106f22f78b1f8023209f7/f833c891/mixed-reality-2018-2019_Virtuele-Campus_03.png'
        },
        {
          title: 'Virtuele Campus - Image 004',
          type: 1,
          sourceUrl: 'https://dl.airtable.com/.attachments/b37720b639adeb8cc3e3610e8625aa0c/25cfcfbe/mixed-reality-2018-2019_Virtuele-Campus_04.png'
        },
        {
          title: 'Virtuele Campus - Image 005',
          type: 1,
          sourceUrl: 'https://dl.airtable.com/.attachments/5ba82acdbd868df814fc1cf759cd2290/d2183afb/mixed-reality-2018-2019_Virtuele-Campus_05.png'
        },
        {
          title: 'Virtuele Campus - Image 006',
          type: 1,
          sourceUrl: 'https://dl.airtable.com/.attachments/f712f088a6b5d590477186fa6226de0c/c516bdfd/mixed-reality-2018-2019_Virtuele-Campus_06.png'
        }
      ],
      likes: 54,
      views: 173,
      created: 1630404000,
      modified: 1635274635
    },
    {
      titel: 'Mijn Lievelingskostje',
      synopsis: 'Food Photography: Een opname van je lievelingsgerecht met veel aandacht voor sfeer (vb: decor, lichtinval, …) fotograferen. Denk hierbij aan de vele schitterende foto\'s in kookboeken, zoas deze van Jamie Oliver, Pascale Naessens, … ) \\- Zoek en bestudeer goede voorbeelden, camerastandpunt, kadrering, lichtinval, kleur, … Beschrijf ook waarom je die voorbeelden heb gekozen \\- Gebruik enkel voorbeelden van gekende (studio)fotografen. \\- Schenk veel aandacht aan de opstelling, ook al hou je deze heel eenvoudig. Maak eventueel meerdere variaties \\- Wat bereid je thuis voor? En wat moet er on spot in de studio worden klaargemaakt. Voorzie het nodige materiaal. Een goede voorbereiding is meer dan de helft van het werk.',
      thumbnailUrl: 'https://dl.airtable.com/.attachments/df5f68d03ac07e6de5a8b3e7f5323bef/32a8eb1a/Blondeel_Demmy_Food_DSCF1581.jpg',
      assets: [
        {
          title: 'Benoit Valentine\'s favorite food',
          type: 1,
          sourceUrl: 'https://dl.airtable.com/.attachments/340ce1290992b9c1b130b72652e1e5ee/34cbf8b4/Benoit_Valentine_food_20201207.jpg'
        },
        {
          title: 'Benoit Valentine\'s favorite food',
          type: 1,
          sourceUrl: 'https://dl.airtable.com/.attachments/32277a07d34b3026f5ae4454d3ac7912/6ef3c318/Blondeel_Demmy_Food_DSCF1581.jpg'
        },
        {
          title: 'Eeckhout Marle\'s favorite food',
          type: 1,
          sourceUrl: 'https://dl.airtable.com/.attachments/20d1d570c55c708130545c5cec69239b/d1601ece/Eeckhout-Marle_food_8145.jpg'
        },
        {
          title: 'Fieremans Vince\'s favorite food',
          type: 1,
          sourceUrl: 'https://dl.airtable.com/.attachments/e03e5411bb7b844a109ba6a5f14bdd79/0ee843b2/Fieremans_Vince_Food_282.jpg'
        },
        {
          title: 'Lanckriet Laura\'s favorite food',
          type: 1,
          sourceUrl: 'https://dl.airtable.com/.attachments/f4470be3a7cd459f0e9381dcea31ea9c/e430a87b/Lanckriet_Laura_food_-0192-2.jpg'
        },
        {
          title: 'Merckx Irma\'s favorite food',
          type: 1,
          sourceUrl: 'https://dl.airtable.com/.attachments/e02c2babf29e1bbbdc387f3c1746e7c0/3b2096bf/merckx_irma_food_DSC0812.jpg'
        },
        {
          title: 'Servayge Carolle\'s favorite food',
          type: 1,
          sourceUrl: 'https://dl.airtable.com/.attachments/07bbb2f97a9084edcd0bd118f5e66bb2/6e6278f4/Servayge_CarolleFood-18062.jpg'
        },
        {
          title: 'Vandersmissen Tessa\'s favorite food',
          type: 1,
          sourceUrl: 'https://dl.airtable.com/.attachments/01e7b61e9534c7edf05d7c5d1588ec26/9e2ce646/Vandersmissen_Tessa_food_7830.jpg'
        }
      ],
      likes: 42,
      views: 124,
      created: 1630404000000,
      modified: 1635274296000
    }
  ];


  const app = {
    init() {
      // Start init, log to debugger:
      tools.debugger('Application initializing...');

      // Generate the user interface.
      this.generateUI();
      /*
      Call for interaction and start the program.
      - If the Program is in debug or noJokes mode it will skip the interaction and run the program directly.
      */
      this.application.askForInteraction();

      // End init, log to debugger:
      tools.debugger('Application initialized!');
    },


    generateUI() {
      tools.debugger('Generate user interface...');

      // Create header and add it to the input function.
      const header = `${'='.repeat(100)}\
        \n|${' '.repeat(44)}${'Portfolio'.toUpperCase()}${' '.repeat(45)}|\
        \n${'='.repeat(100)}`;
      tools.input(header);

      // Go thru all the projects and add them to the input function.
      projectsData.map((project, i) => {
        // Define data objects needed later on.
        const dateCreated = new Date(project.created).toLocaleDateString('en-US');
        const dateModified = new Date(project.modified).toLocaleDateString('en-US');
        const timeModified = new Date(project.modified).toLocaleTimeString('en-US');

        // Create project
        const data = `Project ${i + 1}:\t\t${project.titel}\
          \n${'='.repeat(100)}\
          \nSynopsis:\t\t${project.synopsis}\
          \nThumbnail:\t\t${project.thumbnailUrl}\
          \nLikes:\t\t\t${project.likes}\
          \nViews:\t\t\t${project.views}\
          \nCreated at:\t${dateCreated}\
          \nModified at:\t${dateModified} at ${timeModified}\
          \n${'-'.repeat(100)}\
          \nAssets\
          \n${'-'.repeat(100)}`;
        tools.input(data);

        // Create assets list
        project.assets.map((asset, i) => { //                            - Gets a readable type name from the number id.
          const assets = `Asset ${i + 1}:\t\t${asset.title} (type: ${app.application.getAssetsType(asset.type).typeName})\
            \n\t\t\t\t${asset.sourceUrl}`;
          tools.input(assets);
        });

        // Add line to end of assets
        tools.input('='.repeat(100));
      });

      tools.debugger('Generated user interface!');
    },


    application: {
      // Get a human readable type or request what the numbers TypeName is.
      getAssetsType(type) {
        switch (Number(type)) {
          case 1:
            return { // I'm using return as a replacement of break.
              type: 1,
              typeName: 'Image' // Default set to styled upper case.
            };
          case 2:
            return {
              type: 3,
              typeName: 'Vimeo'
            };
          case 3:
            return {
              type: 3,
              typeName: 'YouTube'
            };
          default:
            return {
              type: 0,
              typeName: 'Undefined'
            };
        }
      },


      // Function interaction and start project, or just start the project
      askForInteraction() {
        tools.debugger('Interaction requested!');

        // Check if noJokes is enabled. If not continue
        if (tools.settings.noJokes) {
          tools.debugger('Interaction canceled but still sending message! (noJokes enabled)');

          // Start the project
          tools.log(tools.output, 0, 'askForInteraction');

          tools.debugger('Interaction event competed!');
          return;
        }

        // Define readline object
        const readline = require('readline').createInterface({
          input: process.stdin,
          output: process.stdout
        });

        // log info:
        tools.log('What\'s your mood? ["0" for normal, "1" for in the mood, "2" for special!]', -1, 'askForInteraction');
        // Set default message:
        let query = 'React with: 0, 1 or 2 > ';

        // If debug mode is enabled, change the default message so it won't add debug lines to the end of the question.
        if (tools.settings.debug) {
          // Log message
          tools.log('React with: 0, 1 or 2: ', -1, 'askForInteraction');
          // Clear question
          query = '';
        }
        // Start a readline session:
        readline.question(query, interaction => {
          // !! All code below will only be ran ones the user has reacted !!
          // Check for right content in message
          if (interaction === '0' || interaction === '1' || interaction === '2') {
            // If correct, start the logger.
            tools.log(tools.output, Number(interaction), 'askForInteraction');
            // Else warn and stop project.
          } else {
            tools.log('How dare u! I asked for 0, 1 or 2!!', -3, 'askForInteraction');
          }
          tools.debugger('Interaction competed!');
          // Close the readline
          readline.close();
          // Stop background process (input)
          process.stdin.destroy();
        });
      }
    }
  };
  // Start initialization of the project.
  app.init();
})();