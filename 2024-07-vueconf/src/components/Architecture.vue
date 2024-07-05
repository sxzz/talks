<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

// Made by @LittleSound. Thanks to her!
const { $clicks } = useSlideContext()
</script>

<template>
  <div class="architecture mt--8 text-xs">
    <div
      relative
      w-full
      rounded-lg
      text-white
      shadow-lg
      p="t-8 b-2"
      transition="all duration-500 ease-in-out"
      :class="[$clicks >= 4 ? 'px-30' : 'px-60']"
    >
      <!-- 上层的方框 -->
      <div class="grid grid-cols-2 mb-2 gap-x-3 gap-y-2">
        <div
          class="border-1 border-white rounded bg-gray/40 p-1"
          transition="all duration-500 ease-in-out"
          :class="[
            [0, 1, 2, 4].includes($clicks) ? 'op-100' : 'op-50',
            $clicks >= 4 ? 'col-span-1' : 'col-span-2',
          ]"
        >
          <p text="$text-secondary" font-mono>@vitejs/plugin-vue</p>
          <p w-full flex items-center text-sm>
            <span i-ri-arrow-down-fill inline-block />
            <span>Call</span>
          </p>
        </div>
        <div
          v-click="4"
          class="border-1 border-white rounded bg-gray/40 p-1 text-right"
          transition="all duration-500 ease-in-out"
          :class="[
            $clicks >= 6 ? 'op-50' : 'op-100',
            $clicks >= 4 ? 'block' : '!hidden',
          ]"
        >
          <p text="$text-secondary" font-mono>unplugin-vue-jsx-vapor</p>
          <p w-full flex items-center justify-end text-sm>
            <span>Call</span>
            <span i-ri-arrow-down-fill inline-block />
          </p>
        </div>
        <div
          class="border-1 border-white rounded bg-gray/40 p-1"
          transition="all duration-500 ease-in-out"
          :class="[
            [0, 1, 2, 4].includes($clicks) ? 'op-100' : 'op-50',
            $clicks >= 4 ? 'col-span-1' : 'col-span-2',
          ]"
        >
          <p text="$text-secondary" font-mono>@vue/compiler-sfc</p>
          <p w-full flex items-center text-sm>
            <span i-ri-arrow-down-fill inline-block />
            <span>Call</span>
          </p>
        </div>
        <div
          class="border-1 border-white rounded bg-gray/40 p-1 text-right"
          op-0
          transition="all duration-500 ease-in-out"
          :class="[$clicks >= 4 ? 'block' : '!hidden']"
        >
          <!-- @vue/jsx-vapor 占位符 -->
          <p font-mono>@vue/jsx-vapor</p>
          <p>JSX ➡️ IR</p>
        </div>
      </div>
      <!-- 中间的方框 -->
      <div
        class="mb-6 border-1 border-white rounded bg-gray/40 p-1"
        :class="[2, 5].includes($clicks) ? 'op-50' : 'op-100'"
      >
        <div mb-2>
          <p text="$text-secondary" font-mono>@vue/compiler-vapor</p>
          <p
            text-sm
            transition="all duration-500 ease-in-out"
            :class="[6].includes($clicks) ? 'op-20' : 'op-100'"
          >
            SFC <span i-ri-arrow-right-fill relative top-0.5 inline-block /> JS
            Code
          </p>
        </div>
        <div grid grid-cols-2 gap-x-3 gap-y-2>
          <!-- @vue/compiler-vapor -->
          <div
            grid
            grid-cols-1
            gap-2
            :class="[
              $clicks >= 4 ? 'col-span-1' : 'col-span-2',
              [6].includes($clicks) ? 'op-20' : 'op-100',
            ]"
            transition="all duration-500 ease-in-out"
          >
            <div class="border-1 border-white rounded p-1">
              <p text="$text-secondary" font-mono>[Parse]</p>
              <p text-sm />
              <p>
                SFC
                <span i-ri-arrow-right-fill relative top-0.5 inline-block /> AST
              </p>
            </div>
            <div class="border-1 border-white rounded p-1">
              <p text="$text-secondary" font-mono>[Transform]</p>
              <p text-sm />
              <p>
                SFC AST
                <span i-ri-arrow-right-fill relative top-0.5 inline-block /> IR
              </p>
            </div>
          </div>
          <!-- @vue/jsx-vapor -->
          <div
            v-click="4"
            mt="-24.75"
            mb="-1"
            mr="-1"
            flex
            flex-col
            gap-2
            overflow-hidden
            border-1
            border-white
            rounded
            p-1
            text-right
            shadow
            transition="all duration-500 max-height-500 ease-in-out"
            :class="[
              $clicks >= 4 ? 'flex' : '!hidden',
              $clicks === 5 ? 'op-50' : 'op-100',
              [6].includes($clicks)
                ? 'max-h-200 bg-gray/20 backdrop-blur-md !duration-2000'
                : 'max-h-11 bg-gray/50',
            ]"
          >
            <div>
              <p text="$text-secondary" font-mono>@vue/jsx-vapor</p>
              <p text-sm />
              <p>
                JSX
                <span i-ri-arrow-right-fill relative top-0.5 inline-block /> IR
              </p>
            </div>
            <div flex-1 />
            <div grid grid-cols-1 gap-2>
              <div class="border-1 border-white rounded p-1">
                <p text="$text-secondary" font-mono>[Parse]</p>
                <p text-sm>
                  JSX
                  <span i-ri-arrow-right-fill relative top-0.5 inline-block />
                  AST
                </p>
              </div>
              <div class="border-1 border-white rounded p-1">
                <p text="$text-secondary" font-mono>[Transform]</p>
                <p text-sm>
                  JSX AST
                  <span i-ri-arrow-right-fill relative top-0.5 inline-block />
                  IR
                </p>
              </div>
            </div>
          </div>
          <div
            class="border-1 border-white rounded p-1"
            col-span-2
            transition="all duration-500 ease-in-out"
            :class="[
              $clicks === 6 ? 'text-right' : 'text-left',
              $clicks < 4 || $clicks === 6 ? 'w-full' : 'w-[49%] !duration-0',
            ]"
          >
            <p text="$text-secondary" font-mono>[Generate]</p>
            <p text-sm>
              IR <span i-ri-arrow-right-fill relative top-0.5 inline-block /> JS
              Code
            </p>
          </div>
        </div>
      </div>
      <div h-4 w-full />
      <!-- 底部的方框 -->
      <div
        class="border-1 border-white rounded bg-gray/40 p-1"
        transition="all duration-500 ease-in-out"
        :class="[
          $clicks === 5 || $clicks === 2 ? 'op-50' : 'op-100',
          $clicks === 6 ? 'text-right' : 'text-left',
        ]"
      >
        <p text="$text-secondary">JS Code</p>
        <p text-sm>Final Product｜最终产物</p>
      </div>
      <!-- 箭头 -->
      <div>
        <!-- SFC -->
        <div
          absolute
          inset-y-0
          w-10
          translate-x="-1/2"
          flex="~ col"
          border="$color-sfc"
          pb-16
          transition="all duration-500 ease-in-out"
          :class="[
            $clicks >= 1 ? 'translate-y-0' : 'translate-y--100',
            $clicks >= 4 ? 'left-8/20' : 'left-10/20',
            $clicks >= 5 ? 'op-20' : 'op-100',
          ]"
        >
          <div
            border="$color-sfc"
            w-full
            flex-1
            border-4
            rounded-t
            border-b-none
            p-1
            text-center
            font-mono
          >
            SFC
          </div>
          <div ml="-2" w-14 flex>
            <div w-2 border-t-4 border="$color-sfc" rounded-tl />
            <div w-1.5 border-t-4 border="$color-sfc" rounded-br />
            <div w-10 />
            <div w-1.5 border-t-4 border="$color-sfc" rounded-bl />
            <div w-2 border-t-4 border="$color-sfc" rounded-tr />
          </div>
          <div
            mt="-5"
            border="$color-sfc"
            h-10
            w-10
            rotate-45
            border-b-4
            border-r-4
            rounded-br
          />
        </div>
        <!-- JSX -->
        <div
          v-click="4"
          absolute
          inset-y-0
          w-10
          left="12/20"
          translate-x="-1/2"
          flex="~ col"
          border="$color-jsx"
          pb-16
          transition="all duration-500 ease-in-out"
          :class="$clicks >= 4 ? 'translate-y-0' : 'translate-y--100'"
        >
          <div
            border="$color-jsx"
            w-full
            flex-1
            border-4
            rounded-t
            border-b-none
            p-1
            text-center
            font-mono
          >
            JSX
          </div>
          <div ml="-2" w-14 flex>
            <div w-2 border-t-4 border="$color-jsx" rounded-tl />
            <div w-1.5 border-t-4 border="$color-jsx" rounded-br />
            <div w-10 />
            <div w-1.5 border-t-4 border="$color-jsx" rounded-bl />
            <div w-2 border-t-4 border="$color-jsx" rounded-tr />
          </div>
          <div
            mt="-5"
            border="$color-jsx"
            h-10
            w-10
            rotate-45
            border-b-4
            border-r-4
            rounded-br
          />
        </div>
      </div>
    </div>
    <div mt4 flex justify-between text-xs text="$text-secondary" font-semibold>
      <div>由 Rizumu Ayaka 制作</div>
      <div>
        IR = 中间语言 ｜ AST = 抽象语法树 ｜ SFC = 单文件组件 ｜ JSX =
        JavaScript XML 语法
      </div>
    </div>
  </div>
</template>
